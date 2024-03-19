import React from "react";
import "./Naturalsciences.css";

function Naturalsciences() {
  let td = true;
  let td1 = true;
  let td2 = true;
  let td3 = true;

  const handleItemTransition = () => {
    if (td === true) {
      let item = document.querySelector(".item-of-item");
      item.style.transform = "translateY(20%)";
      if (td1 === false) {
        handleItemTransition1();
      }
      if (td2 === false) {
        handleItemTransition2();
      }
      if (td3 === false) {
        handleItemTransition3();
      }
      let y = document.querySelector(".e1");
      y.style.marginBottom = "70rem";

      td = false;
    } else {
      let item = document.querySelector(".item-of-item");
      let y = document.querySelector(".e1");
      item.style.transform = "translateY(-2000%)";

      y.style.marginBottom = "-70rem";
      td = true;
    }
  };

  const handleItemTransition1 = () => {
    if (td1 === true) {
      let item = document.querySelector(".t1");
      item.style.transform = "translateY(20%)";
      td1 = false;
      let y = document.querySelector(".e2");
      y.style.marginBottom = "50rem";

      if (td === false) {
        handleItemTransition();
      }
      if (td2 === false) {
        handleItemTransition2();
      }
      if (td3 === false) {
        handleItemTransition3();
      }
    } else {
      let item = document.querySelector(".t1");
      item.style.transform = "translateY(-2000%)";
      let y = document.querySelector(".e2");
      td1 = true;
      y.style.marginBottom = "-50rem";
    }
  };

  const handleItemTransition2 = () => {
    if (td2 === true) {
      let item = document.querySelector(".t2");
      item.style.transform = "translateY(20%)";
      td2 = false;
      let y = document.querySelector(".e3");
      y.style.marginBottom = "30rem";

      if (td1 === false) {
        handleItemTransition1();
      }
      if (td === false) {
        handleItemTransition();
      }
      if (td3 === false) {
        handleItemTransition3();
      }
    } else {
      let item = document.querySelector(".t2");
      item.style.transform = "translateY(-2000%)";
      td2 = true;
      let y = document.querySelector(".e3");
      y.style.marginBottom = "-30rem";
    }
  };

  const handleItemTransition3 = () => {
    if (td3 === true) {
      let item = document.querySelector(".t3");
      item.style.transform = "translateY(20%)";
      td3 = false;
      let y = document.querySelector(".e4");
      y.style.marginBottom = "30rem";

      if (td1 === false) {
        handleItemTransition1();
      }
      if (td2 === false) {
        handleItemTransition2();
      }
      if (td === false) {
        handleItemTransition();
      }
    } else {
      let item = document.querySelector(".t3");
      item.style.transform = "translateY(-2000%)";
      td3 = true;
      let y = document.querySelector(".e4");
      y.style.marginBottom = "-30rem";
    }
  };

  let ds = true;
  let ds2 = true;
  let ds3 = true;

  const buttonB = () => {
    if (ds2 === false) {
      buttonB1();
    }

    if (ds3 === false) {
      buttonB2();
    }

    if (ds === true) {
      let x = document.querySelector(".p");
      let a = document.querySelector(".t11");
      let s = document.querySelector(".item-of-item");
      s.style.marginTop = "-4rem";

      x.style.transform = "translateY(0%)";
      a.style.marginBottom = "18rem";

      ds = false;
    } else {
      let x = document.querySelector(".p");
      let a = document.querySelector(".t11");
      let s = document.querySelector(".item-of-item");
      x.style.transform = "translateY(-1000%)";
      s.style.marginTop = "0rem";

      a.style.marginBottom = "0rem";
      ds = true;
    }
  };

  const buttonB1 = () => {
    if (ds === false) {
      buttonB();
    }

    if (ds3 === false) {
      buttonB2();
    }
    if (ds2 === true) {
      let x = document.querySelector(".p2");
      let a = document.querySelector(".t22");
      let s = document.querySelector(".item-of-item");
      s.style.marginTop = "-8rem";

      x.style.transform = "translateY(0%)";

      a.style.marginBottom = "19rem";

      ds2 = false;
    } else {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p2");
      let a = document.querySelector(".t22");
      x.style.transform = "translateY(-1000%)";
      s.style.marginTop = "0rem";

      a.style.marginBottom = "0rem";
      ds2 = true;
    }
  };

  const buttonB2 = () => {
    if (ds2 === false) {
      buttonB1();
    }

    if (ds === false) {
      buttonB();
    }
    if (ds3 === true) {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p3");
      let a = document.querySelector(".t33");
      s.style.marginTop = "-12rem";

      x.style.transform = "translateY(0%)";

      a.style.marginBottom = "19rem";

      ds3 = false;
    } else {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p3");
      let a = document.querySelector(".t33");
      x.style.transform = "translateY(-1000%)";
      s.style.marginTop = "0rem";

      a.style.marginBottom = "0rem";
      ds3 = true;
    }
  };

  let ds4 = true;
  let ds5 = true;

  const buttonB4 = () => {
    if (ds5 === false) {
      buttonB5();
    }
    if (ds4 === true) {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p4");
      let a = document.querySelector(".t44");
      s.style.marginTop = "-4rem";

      x.style.transform = "translateY(0%)";

      a.style.marginBottom = "19rem";

      ds4 = false;
    } else {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p4");
      let a = document.querySelector(".t44");
      x.style.transform = "translateY(-1000%)";
      s.style.marginTop = "0rem";

      a.style.marginBottom = "0rem";
      ds4 = true;
    }
  };

  const buttonB5 = () => {
    if (ds4 === false) {
      buttonB4();
    }
    if (ds5 === true) {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p5");
      let a = document.querySelector(".t55");
      s.style.marginTop = "-4rem";

      x.style.transform = "translateY(0%)";

      a.style.marginBottom = "19rem";

      ds5 = false;
    } else {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p5");
      let a = document.querySelector(".t55");
      x.style.transform = "translateY(-1000%)";
      s.style.marginTop = "0rem";

      a.style.marginBottom = "0rem";
      ds5 = true;
    }
  };

  let ds6 = true;
  const buttonB6 = () => {
    if (ds6 === true) {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p6");
      let a = document.querySelector(".t66");
      s.style.marginTop = "-4rem";

      x.style.transform = "translateY(0%)";

      a.style.marginBottom = "19rem";

      ds6 = false;
    } else {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p6");
      let a = document.querySelector(".t66");
      x.style.transform = "translateY(-1000%)";
      s.style.marginTop = "0rem";

      a.style.marginBottom = "0rem";
      ds6 = true;
    }
  };

  let ds7 = true;

  const buttonB7 = () => {
    if (ds7 === true) {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p7");
      let a = document.querySelector(".t77");
      s.style.marginTop = "-4rem";

      x.style.transform = "translateY(0%)";

      a.style.marginBottom = "19rem";

      ds7 = false;
    } else {
      let s = document.querySelector(".item-of-item");
      let x = document.querySelector(".p7");
      let a = document.querySelector(".t77");
      x.style.transform = "translateY(-1000%)";
      s.style.marginTop = "0rem";

      a.style.marginBottom = "0rem";
      ds7 = true;
    }
  };

  return (
    <div className="naturalsciences">
      <div className="bg-natural"></div>

      <div className="items-ns">
        <div className="inp-mth e1">
          <button
            className="input"
            onClick={() => {
              handleItemTransition();
            }}
          >
            Mathematics and Computer Science
          </button>

          <div className="item-of-item">
            <div className="d-s t11">
              <button
                type="submit"
                onClick={() => {
                  buttonB();
                }}
              >
                {" "}
                mathematical
              </button>
              <p className="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptate quae consequuntur corporis, repellat explicabo nostrum
                deleniti enim culpa provident.
              </p>
            </div>

            <div className="d-s d-s2  t22">
              <button
                type="submit"
                onClick={() => {
                  buttonB1();
                }}
              >
                {" "}
                mathematical
              </button>
              <p className="p2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptate quae consequuntur corporis, repellat explicabo nostrum
                deleniti enim culpa provident.
              </p>
            </div>

            <div className="d-s d-s3  t33">
              <button
                type="submit"
                onClick={() => {
                  buttonB2();
                }}
              >
                {" "}
                Computer Science
              </button>
              <p className="p3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptate quae consequuntur corporis, repellat explicabo nostrum
                deleniti enim culpa provident.
              </p>
            </div>
          </div>
        </div>

        <div className="inp-mth  e2">
          <input
            type="submit"
            value={"Physics"}
            className="input"
            onClick={() => {
              handleItemTransition1();
            }}
          />
          <div className="item-of-item t1">
            <div className="d-s d-s4  t44">
              <button
                type="submit"
                onClick={() => {
                  buttonB4();
                }}
              >
                Physics
              </button>
              <p className="p4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptate quae consequuntur corporis, repellat explicabo nostrum
                deleniti enim culpa provident.
              </p>
            </div>
            <div className="d-s d-s5  t55">
              <button
                type="submit"
                onClick={() => {
                  buttonB5();
                }}
              >
                Biophysics
              </button>
              <p className="p5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptate quae consequuntur corporis, repellat explicabo nostrum
                deleniti enim culpa provident.
              </p>
            </div>{" "}
          </div>
        </div>

        <div className="inp-mth e3">
          <input
            type="submit"
            value={"Chemistry"}
            className="input"
            onClick={() => {
              handleItemTransition2();
            }}
          />
          <div className="item-of-item t2">
            <div className="d-s d-s6 t66">
              <button
                type="submit"
                onClick={() => {
                  buttonB6();
                }}
              >
                Chemistry
              </button>
              <p className="p6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptate quae consequuntur corporis, repellat explicabo nostrum
                deleniti enim culpa provident.
              </p>
            </div>
          </div>
        </div>

        <div className="inp-mth e4">
          <input
            type="submit"
            value={"Marine Physical Sciences"}
            className="input"
            onClick={() => {
              handleItemTransition3();
            }}
          />

          <div className="item-of-item t3">
            <div className="d-s d-s7  t77">
              <button
                type="submit"
                onClick={() => {
                  buttonB7();
                }}
              >
                Marine Physical Sciences
              </button>
              <p className="p7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptate quae consequuntur corporis, repellat explicabo nostrum
                deleniti enim culpa provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Naturalsciences;
