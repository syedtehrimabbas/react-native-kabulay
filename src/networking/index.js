export const BASE_API_URL = "http://incredibleinfosoft.com/";
export const BASE_IMAGE_URL = "http://incredibleinfosoft.com";

let endPoints = {
  createUser: "PROJECTS/dorange/App/Task/create_user",
  verifyEmail: "verify/email",
  token: "token",
  states: "get/states",
  cities: "get/cities",
  basicInfo1: "register/user",
  basicInfo3: "update/user/personal/detail",
  // verifySelfie: "email/image",
  verifySelfie: "selfie/verification",
  login: "login/email",
  confirmLogin: "login/confirm/email",
  forgotPassword: "forget/sendNumber",
  forgotVerifyCode: "forget/verify",
  changePassword: "forget/pass/change",
  saveBio: "update/user/bio/detail",
  getBio: "get/profile/bio/",
  basicDetails: "get/user/profile/basic/",
  personalDetails: "get/profile/personal/",
  hobbies: "get/all/hobbies",
  qualities: "get/all/qualities",
  uploadAlbums: "upload/user/album",
  getAlbums: "get/user/album/",
  getInterest: "user/matches/",
  updateBasicProfile: "update/user/profile/basic",
  doLike: "add/user/favourite/list/",
  filterMatch: "search/match?page=",
  getProfileStats: "get/profile/stats/",
  getILikedAndLikedMeList: "get/interest/list/",
  getConversation: "all/chat/",
  getMessages: "get/messages",
  sendMessage: "send/message",
  myMatches: "user/all/matches/",
  savePackage: "user/update/package",
};

class Http {
  getAbsoluteUrl = (endPoint) => {
    // console.log("End Point=> " + endPoint + "\nUrl=> ", BASE_API_URL);
    console.log("RequestURL=> " + BASE_API_URL + endPoint);
    return BASE_API_URL + endPoint;
  };

  getAbsoluteImageUrl = (image) => {
    if (image === "image" || image === "" || image === undefined || image === null)
      return "https://alliancebjjmn.com/wp-content/uploads/2019/07/placeholder-profile-sq.jpg";
    else
      return BASE_IMAGE_URL + image;
  };


  createUser(formData, callBack) {
    const url = this.getAbsoluteUrl(endPoints.createUser);
    this.postHttpRequest(url, formData, callBack);
  }

  appendToken(formData, onAppend) {
    this.rsfToken((status, res) => {
      if (status) {
        formData.append("_token", res);
        onAppend(formData);
      }
    });
  }

  verifyEmail(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.verifyEmail);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  basicInfo1(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.basicInfo1);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  updateBasicProfile(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.updateBasicProfile);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  basicInfo3(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.basicInfo3);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  saveBio(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.saveBio);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  doLike(id, formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(`${endPoints.doLike}${id}`);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  getBio(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.getBio}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }


  getHobbies(callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.hobbies}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getQualities(callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.qualities}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getAlbums(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.getAlbums}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getBasicDetails(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.basicDetails}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getPersonalDetails(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.personalDetails}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getProfileStats(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.getProfileStats}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  verifySelfie(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.verifySelfie);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  uploadAlbums(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.uploadAlbums);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  getInterest(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.getInterest}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getILikedAndLikedMeList(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.getILikedAndLikedMeList}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getConversation(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.getConversation}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getMatches(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.myMatches}${id}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  getMessages(id, otherId, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.getMessages}?from=${id}&to=${otherId}`);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  sendMessage(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.sendMessage);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  filterMatch(page, formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(`${endPoints.filterMatch}${page}`);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  login(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.login);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  confirmLogin(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.confirmLogin);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  forgotPassword(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.forgotPassword);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  forgotVerifyCode(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.forgotVerifyCode);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  changePassword(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.changePassword);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  states(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.states);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  cities(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.cities);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  savePackage(formData, callBack) {
    this.appendToken(formData, (newData) => {
      const url = this.getAbsoluteUrl(endPoints.savePackage);
      this.postHttpRequest(url, newData, callBack);
    });
  }

  rsfToken(callBack) {
    const url = this.getAbsoluteUrl(endPoints.token);
    this.getHttpRequest(url, new FormData(), callBack);
  }

  postHttpRequest(url, formData, callBack) {
    console.log("formData",formData)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    this.httpRequest(xhr, formData, callBack);
  }

  getHttpRequest(url, formData, callBack) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    // xhr.setRequestHeader("Authorization", "Bearer" + " " + token);
    this.httpRequest(xhr, formData, callBack);
  }

  httpRequest(xhr, formData, callBack) {
    xhr.onload = async () => {
      try {
        const response = JSON.parse(xhr.response);
        callBack(true, response);
      } catch (e) {
        const response = xhr.response;
        callBack(true, response);
      }
    };
    xhr.onerror = e => {
      console.log(e, "upload failed");
      callBack(false, e.message);
    };
    xhr.ontimeout = e => {
      console.log(e, "upload timeout");
      callBack(false, e.message);
    };

    xhr.send(formData);
  }
}

const HttpService = new Http();
export default HttpService;
