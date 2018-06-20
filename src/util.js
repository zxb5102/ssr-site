import Vue from "vue";
import $ from "jquery";
/**
 * 
 * @param {t} t  dom element
 * @param {i} i  height
 * @param {e} e  width
 */
export function fitImg(t, i, e) {
    // console.log(e);
    var s = t.height
        , n = t.width
        , o = i
        , h = e;
    // console.log(s);
    if (n / s > h / o) {
        var a = n * (o / s);
        t.style.height = o + "px",
            t.style.width = a + "px",
            t.style.height = o + "px";
        var r = " 0 0 0 -" + (a - h) / 2 + "px";
        t.style.margin = r
    } else {
        var l = s * (h / n);
        t.style.width = h + "px",
            t.style.height = l + "px";
        r = "-" + (l - o) / 2 + "px 0 0 0 ";
        t.style.margin = r
    }
}
export function autoFit(self) {
    //  var imgHeight =  self.clientHeight;
    //  var imgWidth = self.clientWidth;
    // if (document.documentElement.clientWidth < 992) {
    // self.style = "";
    self.removeAttribute("style");
    var width = document.documentElement.clientWidth;
    var height = $(self).closest(".el-carousel__container").height();
    //  console.log(height);
    fitImg(self, height, width);
    // }
}

export function autoFitWrapImg(self) {
    // self.style = "";
    self.removeAttribute("style");
    var wrapImg = $(self).closest(".wrap-img");
    if (wrapImg.length != 0) {
        var width = wrapImg.width();
        var height = wrapImg.height();
        fitImg(self, height, width);
        return;
    }
    wrapImg = $(self).closest(".wrap-designer-img");
    if (wrapImg.length != 0) {
        var width = wrapImg.width();
        var height = wrapImg.height();
        fitImg(self, height, width);
        return;
    }
    wrapImg = $(self).closest(".top-img");
    if (wrapImg.length != 0) {
        var width = wrapImg.width();
        var height = wrapImg.height();
        fitImg(self, height, width);
        return;
    }
    wrapImg = $(self).closest(".wrap-entry-img");
    if (wrapImg.length != 0) {
        var width = wrapImg.width();
        var height = wrapImg.height();
        fitImg(self, height, width);
        return;
    }
    // console.log($(self).closest(".wrap-img")[0]);
}

export function proFitImg(self) {
    self.removeAttribute("style");
    var width = document.documentElement.clientWidth;
    if (width < 992) {
        fitImg(self, 150, width * 0.95);
    } else {
        fitImg(self, 150, 262);
    }
}
export function designerHouseFitImg(self) {
    self.removeAttribute("style");
    var width = document.documentElement.clientWidth;
    if (width < 992) {
        fitImg(self, 100, 100);
    } else {
        fitImg(self, 113, 200);
    }
}
export function newsFitImgForCommon(self) {
    self.removeAttribute("style");
    var width = document.documentElement.clientWidth;
    if (width < 992) {
        fitImg(self, 66, 100);
    } else {
        fitImg(self, 113, 200);
    }
}
export function newsFitImgForBig(self) {
    self.removeAttribute("style");
    var width = document.documentElement.clientWidth;
    if (width < 992) {
        fitImg(self, 150, width);
    } else {
        fitImg(self, 350, 835);
    }
}
export function cacheFit(self) {
    // console.log(window.windowCacheWidth);
    // if (window.windowCacheWidth && window.windowCacheHeight) {
    //     fitImg(self, window.windowCacheHeight, window.windowCacheWidth);
    //     // console.log(0);
    // } else {
    //     var wrap = $(self).closest(".wrap-img");
    //     window.windowCacheWidth = parseFloat(window.getComputedStyle(wrap[0]).width.replace("px",""));
    //     window.windowCacheHeight = parseFloat(window.getComputedStyle(wrap[0]).height.replace("px",""));
    //     //  = $(self).closest(".wrap-img").width();
    //     // window.windowCacheHeight = $(self).closest(".wrap-img").height();
    //     fitImg(self, window.windowCacheHeight, window.windowCacheWidth);
    //     // console.log(1);
    // }
}
export const bus = new Vue();
