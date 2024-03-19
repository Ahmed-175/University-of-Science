import React from 'react';
import './BiologicalSciences.css';

function BiologicalSciences() {

  let bio1 = true;
  let bio2 = true;
  let bio3 = true;
  let bio4 = true;
  let bio5 = true;
  let bio6 = true;
  let boiItem1 = true;
  let boiItem2 = true;
  let boiItem3 = true;
  let boiItem4 = true;
  let boiItem5 = true;
  let boiItem6 = true;

  const handleItemTransition1 = () => {
    if (bio1 === true) {

      let bo = document.querySelector(".item-bio-t1");
      bo.style.transform = "translateY(0)";
      bio1 = false;
    } else {
      let bo = document.querySelector(".item-bio-t1");
      bo.style.transform = "translateY(-1400px)";
      bio1 = true;
    }
  };


  const handleItemTransition2 = () => {
    if (bio2 === true) {

      let bo = document.querySelector(".item-bio-t2");
      bo.style.transform = "translateY(0)";
      bio2 = false;
    } else {
      let bo = document.querySelector(".item-bio-t2");
      bo.style.transform = "translateY(-1500px)";
      bio2 = true;
    }
  };

  const handleItemTransition3 = () => {
    if (bio3 === true) {

      let bo = document.querySelector(".item-bio-t3");
      bo.style.transform = "translateY(0)";
      bio3 = false;
    } else {
      let bo = document.querySelector(".item-bio-t3");
      bo.style.transform = "translateY(-1500px)";
      bio3 = true;
    }
  };

  const handleItemTransition4 = () => {
    if (bio4 === true) {

      let bo = document.querySelector(".item-bio-t4");
      bo.style.transform = "translateY(0)";
      bio4 = false;
    } else {
      let bo = document.querySelector(".item-bio-t4");
      bo.style.transform = "translateY(-1500px)";
      bio4 = true;
    }
  };

  const handleItemTransition5 = () => {
    if (bio5 === true) {

      let bo = document.querySelector(".item-bio-t5");
      bo.style.transform = "translateY(0)";
      bio5 = false;
    } else {
      let bo = document.querySelector(".item-bio-t5");
      bo.style.transform = "translateY(-1500px)";
      bio5 = true;
    }
  };
  const handleItemTransition6 = () => {
    if (bio6 === true) {

      let bo = document.querySelector(".item-bio-t6");
      bo.style.transform = "translateY(0)";
      bio6 = false;
    } else {
      let bo = document.querySelector(".item-bio-t6");
      bo.style.transform = "translateY(-1500px)";
      bio6 = true;
    }
  };













  const buttonbo1 = () => {

    if (boiItem2 === false) {
      buttonbo2();

    }
    if (boiItem3 === false) {
      buttonbo3();

    }
    if (boiItem1 === true) {
      let a = document.querySelector('.pb1');
      let as = document.querySelector('.man1');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem1 = false;
    } else {
      let a = document.querySelector('.pb1');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man1');
      as.style.marginBottom = "0";
      boiItem1 = true;

    }
  }



  const buttonbo2 = () => {


    if (boiItem1 === false) {
      buttonbo1();

    }
    if (boiItem3 === false) {
      buttonbo3();

    }
    if (boiItem2 === true) {
      let a = document.querySelector('.pb2');
      let as = document.querySelector('.man2');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem2 = false;
    } else {
      let a = document.querySelector('.pb2');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man2');
      as.style.marginBottom = "0";
      boiItem2 = true;

    }
  }


  const buttonbo3 = () => {

    if (boiItem2 === false) {
      buttonbo2();

    }
    if (boiItem1 === false) {
      buttonbo1();

    }
    if (boiItem3 === true) {
      let a = document.querySelector('.pb3');
      let as = document.querySelector('.man3');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem3 = false;
    } else {
      let a = document.querySelector('.pb3');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man3');
      as.style.marginBottom = "0";
      boiItem3 = true;

    }
  }








  const buttonbo4 = () => {

    if (boiItem6 === false) {
      buttonbo6();

    }
    if (boiItem5 === false) {
      buttonbo5();

    }
    if (boiItem4 === true) {
      let a = document.querySelector('.pb4');
      let as = document.querySelector('.man4');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem4 = false;
    } else {
      let a = document.querySelector('.pb4');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man4');
      as.style.marginBottom = "0";
      boiItem4 = true;

    }
  }


  const buttonbo5 = () => {

    if (boiItem4 === false) {
      buttonbo4();

    }
    if (boiItem6 === false) {
      buttonbo6();

    }
    if (boiItem5 === true) {
      let a = document.querySelector('.pb5');
      let as = document.querySelector('.man5');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem5 = false;
    } else {
      let a = document.querySelector('.pb5');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man5');
      as.style.marginBottom = "0";
      boiItem5 = true;

    }
  }


  const buttonbo6 = () => {

    if (boiItem5 === false) {
      buttonbo5();

    }
    if (boiItem4 === false) {
      buttonbo4();

    }
    if (boiItem6 === true) {
      let a = document.querySelector('.pb6');
      let as = document.querySelector('.man6');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem6 = false;
    } else {
      let a = document.querySelector('.pb6');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man6');
      as.style.marginBottom = "0";
      boiItem6 = true;

    }
  }



  let boiItem7 = true;
  let boiItem8 = true;
  let boiItem9 = true;
  let boiItem10 = true;


  const buttonbo7 = () => {

    if (boiItem7 === true) {
      let a = document.querySelector('.pb7');
      let as = document.querySelector('.man7');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem7 = false;
    } else {
      let a = document.querySelector('.pb7');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man7');
      as.style.marginBottom = "0";
      boiItem7 = true;

    }
  }



  const buttonbo8 = () => {

    if (boiItem8 === true) {
      let a = document.querySelector('.pb8');
      let as = document.querySelector('.man8');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem8 = false;
    } else {
      let a = document.querySelector('.pb8');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man8');
      as.style.marginBottom = "0";
      boiItem8 = true;

    }
  }
  const buttonbo9 = () => {

    if (boiItem9 === true) {
      let a = document.querySelector('.pb9');
      let as = document.querySelector('.man9');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem9 = false;
    } else {
      let a = document.querySelector('.pb9');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man9');
      as.style.marginBottom = "0";
      boiItem9 = true;

    }
  }


  const buttonbo10 = () => {

    if (boiItem10 === true) {
      let a = document.querySelector('.pb10');
      let as = document.querySelector('.man10');
      as.style.marginBottom = "10rem";
      a.style.transform = "translateY(0)";
      boiItem10 = false;
    } else {
      let a = document.querySelector('.pb10');
      a.style.transform = "translateY(-1500px)";
      let as = document.querySelector('.man10');
      as.style.marginBottom = "0";
      boiItem10 = true;

    }
  }
  return (
    <div className='con-biological'>

      <div className='top-bio '>
        <div className='item-bio'>
          <button className='btn-bio' onClick={() => {
            handleItemTransition1();
          }}>Zoology</button>


          <div className="item-bio-t  item-bio-t1">


            <div className='man man1'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo1();
              }}>Zoology</button>
              <p className='pb1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>
            <div className="man man2">
              <button className='btn-t-bio' onClick={() => {
                buttonbo2();
              }}>Entomology</button>
              <p className='pb2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>

            </div>

            <div className='man man3'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo3();
              }}>Molecular Biology</button>
              <p className='pb3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>



            </div>
          </div>

        </div>





        <div className='item-bio'>
          <button className='btn-bio' onClick={() => {
            handleItemTransition6();
          }}>Botany & Microbiology</button>





          <div className="item-bio-t   item-bio-t6">

            <div className='man man4'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo4();
              }}>Zoology</button>
              <p className='pb4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>

            <div className='man man5'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo5();
              }}>Entomology</button>
              <p className='pb5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>



            <div className='man man6'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo6();
              }}>Molecular Biology</button>
              <p className='pb6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>
          </div>

        </div>



        <div className='item-bio'>
          <button className='btn-bio' onClick={() => {
            handleItemTransition3();
          }}>Marine Science</button>





          <div className="item-bio-t item-bio-t3">
            <div className='man man7'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo7();
              }}>Molecular Biology</button>
              <p className='pb7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>
          </div>

        </div>


      </div>









      <div className='top-bio q1'>


        <div className='item-bio'>
          <button className='btn-bio' onClick={() => {
            handleItemTransition4();
          }}>Biochemistry</button>





          <div className="item-bio-t  item-bio-t4">
            <div className='man man8'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo8();
              }}>Molecular Biology</button>
              <p className='pb8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>         </div>

        </div>






        <div className='item-bio'>
          <button className='btn-bio' onClick={() => {
            handleItemTransition5();
          }}>Environmental Sciences</button>





          <div className="item-bio-t   item-bio-t5">
            <div className='man man9'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo9();
              }}>Molecular Biology</button>
              <p className='pb9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>         </div>

        </div>


        <div className='item-bio'>
          <button className='btn-bio' onClick={() => {
            handleItemTransition2();
          }}>Chemistry</button>





          <div className="item-bio-t  item-bio-t2">
            <div className='man man10'>
              <button className='btn-t-bio' onClick={() => {
                buttonbo10();
              }}>Chemistry</button>
              <p className='pb10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error temporibus maiores alias magnam inventore ad, tenetur eum voluptates placeat deserunt!</p>
            </div>
          </div>

        </div>






      </div>










    </div>
  )
}

export default BiologicalSciences