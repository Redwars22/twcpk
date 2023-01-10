/*
                                           #     #
   ##   #    # #####  #####  ###### #    # ##    #   ##   ##### #  ####  #    #
  #  #  ##   # #    # #    # #      #    # # #   #  #  #    #   # #    # ##   #
 #    # # #  # #    # #    # #####  #    # #  #  # #    #   #   # #    # # #  #
 ###### #  # # #    # #####  #      # ## # #   # # ######   #   # #    # #  # #
 #    # #   ## #    # #   #  #      ##  ## #    ## #    #   #   # #    # #   ##
 #    # #    # #####  #    # ###### #    # #     # #    #   #   #  ####  #    #
                                                                                
*/
var TWColors = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose"
];
function getColor() {
    var _a, _b;
    var intensity = (_a = document.getElementById("color-intensity")) === null || _a === void 0 ? void 0 : _a.value;
    var hue = Number((_b = document.getElementById("color-hue")) === null || _b === void 0 ? void 0 : _b.value);
    var color = TWColors[hue < TWColors.length ? hue : TWColors.length - 1];
    var TWColorClass = "bg-".concat(color, "-").concat(intensity);
    document.getElementById("color-show").className = TWColorClass;
    document.getElementById("color").innerText = TWColorClass;
}
