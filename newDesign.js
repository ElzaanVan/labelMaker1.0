function showSizeOption () {
  document.getElementById("insertLabelSizeOption").style.display = "block";
  document.getElementById("insertBarcodeOption").style.display = "none";
  document.getElementById("insertTextOption").style.display = "none";
  document.getElementById("insertImageOptions").style.display = "none";
  document.getElementById("showCaptureOptionDiv").style.display = "none";
  document.getElementById("myLinks").style.display = "none";

  document.querySelector(".choose-size-of-label").classList.add("nav-link-active");
  document.querySelector(".choose-barcode-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label").classList.remove("nav-link-active");

  document.querySelector(".choose-size-of-label-top-nav").classList.add("nav-link-active");
  document.querySelector(".choose-barcode-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label-top-nav").classList.remove("nav-link-active");

 //Text Box transparency
 var textEditor0 = document.querySelector(".textEditor0");
 var textEditor1 = document.querySelector(".textEditor1");
 var textEditor2 = document.querySelector(".textEditor2");
 if (textEditor0) {
  document.querySelector(".textEditor0").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor0").classList.remove("backgroundTextBoxLabel");
 }
 if (textEditor1) {
  document.querySelector(".textEditor1").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor1").classList.remove("backgroundTextBoxLabel");
 }
 if (textEditor2) {
  document.querySelector(".textEditor2").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor2").classList.remove("backgroundTextBoxLabel");
 }
}

function showBarcodeOption() {
  document.getElementById("insertBarcodeOption").style.display = "block";
  document.getElementById("insertLabelSizeOption").style.display = "none";
  document.getElementById("insertImageOptions").style.display = "none";
  document.getElementById("insertTextOption").style.display = "none";
  document.getElementById("showCaptureOptionDiv").style.display = "none";
  document.getElementById("myLinks").style.display = "none";

  document.querySelector(".choose-barcode-of-label").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label").classList.remove("nav-link-active");

  document.querySelector(".choose-barcode-of-label-top-nav").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label-top-nav").classList.remove("nav-link-active");
 //Text Box transparency
 var textEditor0 = document.querySelector(".textEditor0");
 var textEditor1 = document.querySelector(".textEditor1");
 var textEditor2 = document.querySelector(".textEditor2");
 if (textEditor0) {
  document.querySelector(".textEditor0").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor0").classList.remove("backgroundTextBoxLabel");
 }
 if (textEditor1) {
  document.querySelector(".textEditor1").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor1").classList.remove("backgroundTextBoxLabel");
 }
 if (textEditor2) {
  document.querySelector(".textEditor2").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor2").classList.remove("backgroundTextBoxLabel");
 }
}

function showTextOption() {
  document.getElementById("insertBarcodeOption").style.display = "none";
  document.getElementById("insertLabelSizeOption").style.display = "none";
  document.getElementById("insertImageOptions").style.display = "none";
  document.getElementById("insertTextOption").style.display = "block";
  document.getElementById("showCaptureOptionDiv").style.display = "none";
  document.getElementById("myLinks").style.display = "none";

  document.querySelector(".choose-text-of-label").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-barcode-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label").classList.remove("nav-link-active");

  document.querySelector(".choose-text-of-label-top-nav").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-barcode-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label-top-nav").classList.remove("nav-link-active");

   //Text Box transparency
 var textEditor0 = document.querySelector(".textEditor0");
 var textEditor1 = document.querySelector(".textEditor1");
 var textEditor2 = document.querySelector(".textEditor2");
 if (textEditor0) {
  document.querySelector(".textEditor0").classList.add("backgroundTextBoxLabel");
 }
 if (textEditor1) {
  document.querySelector(".textEditor1").classList.add("backgroundTextBoxLabel");
 }
 if (textEditor2) {
  document.querySelector(".textEditor2").classList.add("backgroundTextBoxLabel");
 }
}

function showImageOption() {
  document.getElementById("insertImageOptions").style.display = "block";
  document.getElementById("insertBarcodeOption").style.display = "none";
  document.getElementById("insertLabelSizeOption").style.display = "none";
  document.getElementById("insertTextOption").style.display = "none";
  document.getElementById("showCaptureOptionDiv").style.display = "none";
  document.getElementById("myLinks").style.display = "none";

  document.querySelector(".choose-image-of-label").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-barcode-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label").classList.remove("nav-link-active");

  document.querySelector(".choose-image-of-label-top-nav").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-barcode-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-capture-of-label-top-nav").classList.remove("nav-link-active");


   //Text Box transparency
   var textEditor0 = document.querySelector(".textEditor0");
   var textEditor1 = document.querySelector(".textEditor1");
   var textEditor2 = document.querySelector(".textEditor2");
   if (textEditor0) {
    document.querySelector(".textEditor0").classList.add("transparentTextBoxLabel");
    document.querySelector(".textEditor0").classList.remove("backgroundTextBoxLabel");
   }
   if (textEditor1) {
    document.querySelector(".textEditor1").classList.add("transparentTextBoxLabel");
    document.querySelector(".textEditor1").classList.remove("backgroundTextBoxLabel");
   }
   if (textEditor2) {
    document.querySelector(".textEditor2").classList.add("transparentTextBoxLabel");
    document.querySelector(".textEditor2").classList.remove("backgroundTextBoxLabel");
   }
  
}

function showCaptureOption () {
  document.getElementById("showCaptureOptionDiv").style.display = "block"
  document.getElementById("insertLabelSizeOption").style.display = "none";
  document.getElementById("insertBarcodeOption").style.display = "none";
  document.getElementById("insertTextOption").style.display = "none";
  document.getElementById("insertImageOptions").style.display = "none";
  document.getElementById("myLinks").style.display = "none";

  document.querySelector(".choose-capture-of-label").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-barcode-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label").classList.remove("nav-link-active");

  document.querySelector(".choose-capture-of-label-top-nav").classList.add("nav-link-active");
  document.querySelector(".choose-size-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-barcode-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-text-of-label-top-nav").classList.remove("nav-link-active");
  document.querySelector(".choose-image-of-label-top-nav").classList.remove("nav-link-active");

 //Text Box transparency
 var textEditor0 = document.querySelector(".textEditor0");
 var textEditor1 = document.querySelector(".textEditor1");
 var textEditor2 = document.querySelector(".textEditor2");
 if (textEditor0) {
  document.querySelector(".textEditor0").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor0").classList.remove("backgroundTextBoxLabel");
 }
 if (textEditor1) {
  document.querySelector(".textEditor1").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor1").classList.remove("backgroundTextBoxLabel");
 }
 if (textEditor2) {
  document.querySelector(".textEditor2").classList.add("transparentTextBoxLabel");
  document.querySelector(".textEditor2").classList.remove("backgroundTextBoxLabel");
 }
}

// Select value for box size
document.getElementById('label-size').addEventListener('change', function() {
  const boxSize = document.querySelector(".label-outside-box");
  if (this.value == "A1") {
      boxSize.style.width = "350px";
      boxSize.style.height = "200px";
      
      // document.querySelector(".label-size").innerHTML = "A1";
  };

  if (this.value =="A2"){
       boxSize.style.width = "450px";
       boxSize.style.height = "230px";
   
      //  document.querySelector(".label-size").innerHTML = "A2";
  };
  
  if (this.value == "A3") {
      boxSize.style.width = "500px";
      boxSize.style.height = "250px";
      
      // document.querySelector(".label-size").innerHTML = "A3";
  };
  
});

//Barcode Location
document.getElementById('barcode-location').addEventListener('change', function() {
    
  if (this.value == "top") {
      document.getElementById("barcodeGenerated").classList.add("barcodeTopLabel");
      document.getElementById("barcodeGenerated").classList.remove("barcodeBottomLabel");
  };

if (this.value == "bottom") {
      document.getElementById("barcodeGenerated").classList.add("barcodeBottomLabel");
      document.getElementById("barcodeGenerated").classList.remove("barcodeTopLabel");
  };

});

//Barcode Size
var barcode = document.getElementById("barcodeGenerated");
document.getElementById("barcode-size").addEventListener("change", function () {
      if (this.value == "smallBarcode") {
        barcode.style.width = "130px";
      }
      if (this.value == "mediumBarcode") {
        barcode.style.width = "150px";
      }
      if (this.value == "largeBarcode") {
        barcode.style.width = "250px";
      }
 
});
 
//Amount of Inputs
var textboxCount = 0;
var count = 0;
var i = 0;

function addCode() {
if (count < 3) {
var p = document.createElement("input");
    p.setAttribute("class", "textEditor" + textboxCount);
    p.setAttribute("contenteditable", "true");

    document.getElementById("add" + textboxCount).appendChild(p);
         
    textboxCount++;
    count++;
}

if (count == 1) {
  document.querySelector(".select-style-textBox1").style.display = "block";
  document.querySelector(".select-font-size-textBox1").style.display = "block";
  document.querySelector(".select-font-family-textBox1").style.display = "block";
}
if (count == 2) {
  document.querySelector(".select-style-textBox2").style.display = "block";
  document.querySelector(".select-font-size-textBox2").style.display = "block";
  document.querySelector(".select-font-family-textBox2").style.display = "block";
}
if (count == 3) {
  document.querySelector(".select-style-textBox3").style.display = "block";
  document.querySelector(".select-font-size-textBox3").style.display = "block";
  document.querySelector(".select-font-family-textBox3").style.display = "block";
}

}

function removeCode() {
  var removeIdField0 = document.getElementById("add0");
  var removeIdField1 = document.getElementById("add1");
  var removeIdField2 = document.getElementById("add2");

  for (i = 0; i <= count; i++) {
    if (count == 3) {
      removeIdField2.innerHTML = "";
    }

    if (count == 2) {
      removeIdField1.innerHTML = "";
    }

    if (count == 1) {
      removeIdField0.innerHTML = "";
    }
  }

  
  if (count == 1) {
    document.querySelector(".select-style-textBox1").style.display = "none";
    document.querySelector(".select-font-size-textBox1").style.display = "none";
  document.querySelector(".select-font-family-textBox1").style.display = "none";
  }
  if (count == 2) {
    document.querySelector(".select-style-textBox2").style.display = "none";
    document.querySelector(".select-font-size-textBox2").style.display = "none";
  document.querySelector(".select-font-family-textBox2").style.display = "none";
  }
  if (count == 3) {
    document.querySelector(".select-style-textBox3").style.display = "none";
    document.querySelector(".select-font-size-textBox3").style.display = "none";
  document.querySelector(".select-font-family-textBox3").style.display = "none";
  }

  count--;
  textboxCount--;

}

//Font Family for Textbox 1
document.getElementById('font-family-textBox1').addEventListener('change', function() {
    
  if (this.value == "Arial") {
      document.querySelector(".textEditor0").style.fontFamily = "Arial";
      // document.querySelector(".font").innerHTML = "Arial";
  };

  if (this.value == "Monospace") {
      document.querySelector(".textEditor0").style.fontFamily = "Monospace";
      // document.querySelector(".font").innerHTML = "Monospace";
  };

  if (this.value == 'Times New Roman') {
      document.querySelector(".textEditor0").style.fontFamily = "Times New Roman";
      // document.querySelector(".font").innerHTML = "Times New Roman";
  };
});
//Font Size for Textbox 0
document.getElementById('font-size-textBox1').addEventListener('change', function() {
    
  if (this.value == "small") {
      document.querySelector(".textEditor0").style.fontSize = "18px"
      // document.querySelector(".font").innerHTML = "Arial";
  };

  if (this.value == "medium") {
    document.querySelector(".textEditor0").style.fontSize = "22px"
      // document.querySelector(".font").innerHTML = "Monospace";
  };

  if (this.value == 'large') {
    document.querySelector(".textEditor0").style.fontSize = "26px"
      // document.querySelector(".font").innerHTML = "Times New Roman";
  };
});

//Font Family for Textbox 2
document.getElementById('font-family-textBox2').addEventListener('change', function() {
    
  if (this.value == "Arial") {
      document.querySelector(".textEditor1").style.fontFamily = "Arial";
      // document.querySelector(".font").innerHTML = "Arial";
  };

  if (this.value == "Monospace") {
      document.querySelector(".textEditor1").style.fontFamily = "Monospace";
      // document.querySelector(".font").innerHTML = "Monospace";
  };

  if (this.value == 'Times New Roman') {
      document.querySelector(".textEditor1").style.fontFamily = "Times New Roman";
      // document.querySelector(".font").innerHTML = "Times New Roman";
  };
});

//Font Family for Textbox 3
document.getElementById('font-family-textBox3').addEventListener('change', function() {
    
  if (this.value == "Arial") {
      document.querySelector(".textEditor2").style.fontFamily = "Arial";
      // document.querySelector(".font").innerHTML = "Arial";
  };

  if (this.value == "Monospace") {
      document.querySelector(".textEditor2").style.fontFamily = "Monospace";
      // document.querySelector(".font").innerHTML = "Monospace";
  };

  if (this.value == 'Times New Roman') {
      document.querySelector(".textEditor2").style.fontFamily = "Times New Roman";
      // document.querySelector(".font").innerHTML = "Times New Roman";
  };
});
//Font Size for Textbox 3
document.getElementById('font-size-textBox3').addEventListener('change', function() {
    
  if (this.value == "small") {
      document.querySelector(".textEditor2").style.fontSize = "18px"
      // document.querySelector(".font").innerHTML = "Arial";
  };

  if (this.value == "medium") {
    document.querySelector(".textEditor2").style.fontSize = "22px"
      // document.querySelector(".font").innerHTML = "Monospace";
  };

  if (this.value == 'large') {
    document.querySelector(".textEditor2").style.fontSize = "26px"
      // document.querySelector(".font").innerHTML = "Times New Roman";
  };
});

//Font Size for Textbox 2
document.getElementById('font-size-textBox2').addEventListener('change', function() {
    
  if (this.value == "small") {
      document.querySelector(".textEditor1").style.fontSize = "18px"
      // document.querySelector(".font").innerHTML = "Arial";
  };

  if (this.value == "medium") {
    document.querySelector(".textEditor1").style.fontSize = "22px"
      // document.querySelector(".font").innerHTML = "Monospace";
  };

  if (this.value == 'large') {
    document.querySelector(".textEditor1").style.fontSize = "26px"
      // document.querySelector(".font").innerHTML = "Times New Roman";
  };
});


///Style TextBox 1
document.getElementById("text-style-textBox1").addEventListener("change", function () {
  if (this.value === "bold") {
    document.querySelector(".textEditor0").classList.toggle("bold");
    document.querySelector(".textEditor0").classList.remove("italic");
    document.querySelector(".textEditor0").classList.remove("underline");
  }
  if (this.value === "italic") {
    document.querySelector(".textEditor0").classList.toggle("italic");
    document.querySelector(".textEditor0").classList.remove("bold");
    document.querySelector(".textEditor0").classList.remove("underline");
  }
  if (this.value === "underline") {
    document.querySelector(".textEditor0").classList.toggle("underline");
    document.querySelector(".textEditor0").classList.remove("bold");
    document.querySelector(".textEditor0").classList.remove("italic");
  }
})

///Style TextBox 2
document.getElementById("text-style-textBox2").addEventListener("change", function () {
  if (this.value === "bold") {
    document.querySelector(".textEditor1").classList.toggle("bold");
    document.querySelector(".textEditor1").classList.remove("italic");
    document.querySelector(".textEditor1").classList.remove("underline");
  }
  if (this.value === "italic") {
    document.querySelector(".textEditor1").classList.toggle("italic");
    document.querySelector(".textEditor1").classList.remove("bold");
    document.querySelector(".textEditor1").classList.remove("underline");
  }
  if (this.value === "underline") {
    document.querySelector(".textEditor1").classList.toggle("underline");
    document.querySelector(".textEditor1").classList.remove("bold");
    document.querySelector(".textEditor1").classList.remove("italic");
  }
})

///Style TextBox 3
document.getElementById("text-style-textBox3").addEventListener("change", function () {
  if (this.value === "bold") {
    document.querySelector(".textEditor2").classList.toggle("bold");
    document.querySelector(".textEditor2").classList.remove("italic");
    document.querySelector(".textEditor2").classList.remove("underline");
  }
  if (this.value === "italic") {
    document.querySelector(".textEditor2").classList.toggle("italic");
    document.querySelector(".textEditor2").classList.remove("bold");
    document.querySelector(".textEditor2").classList.remove("underline");
  }
  if (this.value === "underline") {
    document.querySelector(".textEditor2").classList.toggle("underline");
    document.querySelector(".textEditor2").classList.remove("bold");
    document.querySelector(".textEditor2").classList.remove("italic");
  }
});

//Range Slider + Image 
var ranger = document.getElementById('ranger');
var image =  document.getElementById('image');
var width = image.width;
var height = image.height;


ranger.onchange = function(){
    image.width = width * (ranger.value / 100);
    image.height = height * (ranger.value / 100);
}

var loadFile = function (event) {
    var image = document.querySelector(".output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
document.getElementById('fileUploadImage').addEventListener('click', function(){
    document.getElementById('image').style.display = "flex";
    document.getElementById('ranger').style.display = "inline-block";
    document.getElementById('label-slider').style.display = "inline-block";

    // document.getElementById('section-3').style.display = 'inline-block';
   
});  

//Select position of an image
document.getElementById('image-left-or-right').addEventListener('change', function() {
  if (this.value == 'right') {
      document.getElementById('image').style.right = "0";
      document.getElementById('image').style.left = "initial";
      document.getElementById('image').style.margin = "5px";
  }

  // if (this.value == 'center') {
  //     document.getElementById('image').style.right = "50%";
  //     document.getElementById('image').style.transform = "translate(50%, 50%)";
      
  // }

  if (this.value == 'left') {
      document.getElementById('image').style.right = 'initial';
      document.getElementById('image').style.left = "5";
      document.getElementById('image').style.margin = "5px";
  }
});

//Select top or bottom image
const imageForLabel = document.getElementById("image");

document.getElementById('image-top-or-bottom').addEventListener('change', function() {
  if (this.value == 'top') {
      document.getElementById('image').style.top = "0";
      document.getElementById('image').style.bottom = "initial";
      document.getElementById("image").classList.remove("center-image-for-label");
  }

  if (this.value == 'middle') {
      document.getElementById("image").classList.add("center-image-for-label");
      document.getElementById('image').style.margin = "0px";
  
  }

  if (this.value == 'bottom') {
      document.getElementById('image').style.top = "initial";
      document.getElementById('image').style.bottom = '0';
      document.getElementById("image").classList.remove("center-image-for-label");
  }
});

// document.addEventListener("change", function(e) {
//   if (e.target && e.target.id == "image-top-or-bottom") {
//     if (this.value == "middle") {
//       if (imageForLabel) {
//         document.getElementById('label-oustide-box').style.backgroundImage = `url(${imageForLabel})`;
//       }
//     }
//   }
// })

document.getElementById("fileUploadImage").addEventListener("click", function() {
  document.getElementById("label-slider").style.display = "block";
  document.getElementById("ranger").style.display = "block";
})

//On load Page Modal
$(window).on('load',function(){
  $('#PageLoadModal').modal('show');
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*MOBILE MENY */
if ($(window).width() < 628) {
  document.getElementById("mobileMenuForLabel").style.display = "block";
  
  document.getElementById("mainWrapperLabel").classList.remove("active-cont");
}

/*SVG CONVERSION */
// var svgString = new XMLSerializer().serializeToString(
//   document.querySelector("svg")
// );

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var DOMURL = self.URL || self.webkitURL || self;
// var img = new Image();
// var svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
// var url = DOMURL.createObjectURL(svg);
// img.onload = function () {
//   ctx.drawImage(img, 0, 0);
//   var png = canvas.toDataURL("image/png");
//   document.querySelector("#png-container").innerHTML =
//     '<img src="' + png + '"/>';
//   DOMURL.revokeObjectURL(png);
// };
// img.src = url;