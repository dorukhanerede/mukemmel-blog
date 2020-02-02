import React from "react";
import LayoutTop from "../components/LayoutTop";
import withAuth from "../src/helpers/withAuth";
import { firebase, auth, firestore } from "../src/firebase/index";
import "firebase/storage";
import Router from "next/router";

class CreateBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      details: "",
      image: "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  createPost = async () => {
    let authorName = "Guest";
    if (
      this.state.image !=
        "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" &&
      this.state.title != "" &&
      this.state.details != ""
    ) {
      if (auth != null) {
        if (!auth.currentUser.isAnonymous)
          authorName = auth.currentUser.displayName;
      }
      let docPath = null;
      let res = await firestore
        .collection("posts")
        .add({
          title: this.state.title,
          date: firebase.firestore.Timestamp.now(),
          comments: [],
          author: authorName,
          details: this.state.details,
          likes: [],
          views: 0,
          userID: auth.currentUser.uid
        })
        .then(docRef => {
          docPath = docRef.id;
          console.log("Document successfully written! : ", docRef.id);
        })
        .catch(error => {
          console.error("Error writing document: ", error);
        })
        .then(async () => {
          var ref = firebase
            .storage()
            .ref()
            .child(`posts/${docPath}/photo.jpg`);
          await ref.put(this.state.image);
        })
        .catch(err => console.log(err))
        .then(() => {
          Router.push("/");
        })
        .catch(err => {
          console.log(err);
          Router.push("/");
        });
    } else {
      alert(
        this.state.title == ""
          ? "Please enter Title!"
          : this.state.details == ""
          ? "Please enter Details!"
          : "Please select an image!"
      );
    }
  };
  render() {
    let img;
    if (
      this.state.image !=
      "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
    )
      img = URL.createObjectURL(this.state.image);
    else img = this.state.image;
    return (
      <div className="layout">
        <LayoutTop></LayoutTop>
        <div className="container-fluid create-post">
          {/* <h1 className="display-1">
            <u>Create Blog : </u>
          </h1>
          <br></br> */}
          <form className="form-field row" action="a">
            <div className="form-group file-field col">
              <div className="z-depth-1-half mb-4 col-sm text-center">
                <img
                  src={img}
                  className="img border border-dark img-input"
                  alt="placeholder"
                />
              </div>
              <h4 className="text-center mb-5">Choose a photo to upload!</h4>
              <div className="w-100 text-center">
                <div className="btn btn-dn btn-sm waves-effect col-sm-2">
                  <span>Choose file</span>
                  <input
                    type="file"
                    onChange={e => {
                      if (
                        e.target.files.item(0).type != "image/jpeg" &&
                        e.target.files.item(0).type != "image/png" &&
                        e.target.files.item(0).type != "image/gif" &&
                        e.target.files.item(0) != "image/webp"
                      ) {
                        alert("You can only upload: GIF/JPEG/JPG/PNG/WEBP !");
                      } else {
                        this.setState({
                          image: e.target.files.item(0)
                        });
                      }
                    }}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <div className="container col text-field text-left">
              <div className="form-group">
                <label className="control-label " htmlFor="email">
                  Title:
                </label>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Title.."
                    name="title"
                    maxLength="35"
                    onChange={text => {
                      this.setState({
                        title: text.target.value
                      });
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="pwd">
                  Your Post:
                </label>
                <div className="col-sm">
                  <textarea
                    className="form-control"
                    placeholder="Enter Post Description here..."
                    rows="20"
                    onChange={text => {
                      let val = text.target.value;
                      let addedNewLine = val.replace(/\n/g, "\n\n");
                      this.setState({
                        details: addedNewLine
                      });
                    }}
                  />
                </div>
              </div>
              <div className="form-group submit-field">
                <div className="btn btn-dn btn-sm float-left waves-effect col-sm-2 float-right">
                  <span>Submit</span>
                  <a className="submit-button" onClick={this.createPost}></a>
                </div>
              </div>
            </div>
            {/* <textarea
              className="form-control"
              placeholder="Enter Post Description here..."
              value={() => this.state.details.escapeHTML()}
            /> */}
          </form>
        </div>
      </div>
    );
  }
}

CreateBlog.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  // const res = await fetch("http://localhost:3000/api/poswts");
  // const json = await res.json();

  return { prop: null };
};

export default withAuth(CreateBlog);
