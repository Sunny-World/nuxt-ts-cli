/* eslint-disable */
//Ajax-JSON函数
//强制为同步模式
function AjaxJson(url, method, args, fn, dataType) {
  var obj = null;
  var ajax = new AjaxObject();
  ajax.URL = url;
  ajax.dataType = dataType;
  ajax.Method = method;
  ajax.Async = true;
  ajax.Args = args;
  ajax.onSuccess = function(xhr) {
    var text = xhr.responseText;
    if (text.charCodeAt() == 65279) text = text.substring(1); //处理utf8引导字节
    eval("obj=" + text);
    fn(obj, xhr);
  };
  ajax.onFailure = function(xhr) {
    eval("obj={Tag:'ERROR',Status:'" + xhr.status + "'}");
    fn(obj);
  };
  ajax.Connect();
  return obj;
}

//Ajax标准类模块
function AjaxObject() {
  this.URL = "";
  this.Method = "GET";
  this.Async = true;
  this.Args = null;
  this.onSuccess = function() {};
  this.onFailure = function() {};
  this.Request = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  this.Connect = function() {
    this.Method = this.Method.toUpperCase();
    if (this.Method == "GET" && this.Args) {
      var args = "";
      if (typeof this.Args == "object") {
        var arr = new Array();
        for (var k in this.Args) {
          var v = this.Args[k];
          arr.push(k + "=" + v);
        }
        args = arr.join("&");
      } else {
        // args = data; //alert("string");
      }
      this.URL += (this.URL.indexOf("?") == -1 ? "?" : "&") + args;
      this.Args = null;
    }
    var q = this.Request;
    var evt1 = this.onSuccess;
    var evt2 = this.onFailure;
    var evt3 = this.onLoadend;
    this.Request.onreadystatechange = function() {
      _onStateChange(q, evt1, evt2, evt3);
    };

    this.Request.open(this.Method, this.URL, this.Async);
    if (this.Method == "POST") {
      if (this.dataType == "json") {
        this.Request.setRequestHeader(
          "Content-type",
          "application/json;charset=UTF-8"
        );
      } else {
        this.Request.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded;"
        );
      }
      let args = "";
      if (typeof this.Args == "string") {
        args = this.Args;
      } else if (typeof this.Args == "object") {
        if (this.dataType == "json") {
          this.Args = JSON.stringify(this.Args);
        } else {
          let arr = new Array();
          for (let k in this.Args) {
            let v = this.Args[k];
            arr.push(k + "=" + v);
          }
          args = arr.join("&");
          this.Args = encodeURI(args);
        }
      }
    }
    try {
      this.Request.send(this.Args);
    } catch (e) {
      console.log("connect exception.");
    }
  };

  function _onStateChange(xhr, success, failure) {
    if (xhr.readyState == 4) {
      var s = xhr.status;
      if (s == 0) {
        console.log("connect to url failure.");
      } else if (s >= 200 && s < 400) {
        success(xhr);
      } else {
        failure(xhr);
      }
    }
  }
}

class http {
  constructor() {}

  originPost(obj, fn) {
    if (obj.json !== undefined) {
      AjaxJson(obj.url, "post", obj.json, fn, "json");
    } else {
      AjaxJson(obj.url, "post", obj.data, fn);
    }
  }
  originGet(obj, fn) {
    if (obj.json !== undefined) {
      AjaxJson(obj.url, "get", obj.json, fn, "json");
    } else {
      AjaxJson(obj.url, "get", obj.data, fn);
    }
  }
  wrongCodeTest() {
    // try {
    // 	if (data.code == 400) {
    // 	}
    // } catch (err) {
    // 	console.log(err)
    // }
  }
  httpPost(obj) {
    return new Promise(resolve => {
      this.originPost(obj, res => {
        resolve(res);
      });
    });
  }
  httpGet(obj) {
    return new Promise(resolve => {
      this.originGet(obj, res => {
        this.wrongCodeTest(res);
        resolve(res);
      });
    });
  }
  msgPost(obj) {
    return new Promise(resolve => {
      this.originPost(obj, res => {
        this.wrongCodeTest(res);
        if (res.code == 200) {
          resolve(res.data);
        } else {
          // _Msg.error(res.msg)
        }
      });
    });
  }
  usualPost(obj) {
    return new Promise((resolve, reject) => {
      this.originPost(obj, res => {
        this.wrongCodeTest(res);
        if (res.code == 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      });
    });
  }
}

export default new http();
