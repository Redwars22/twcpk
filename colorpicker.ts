/*
                                           #     #                              
   ##   #    # #####  #####  ###### #    # ##    #   ##   ##### #  ####  #    # 
  #  #  ##   # #    # #    # #      #    # # #   #  #  #    #   # #    # ##   # 
 #    # # #  # #    # #    # #####  #    # #  #  # #    #   #   # #    # # #  # 
 ###### #  # # #    # #####  #      # ## # #   # # ######   #   # #    # #  # # 
 #    # #   ## #    # #   #  #      ##  ## #    ## #    #   #   # #    # #   ## 
 #    # #    # #####  #    # ###### #    # #     # #    #   #   #  ####  #    # 
                                                                                
*/

const TWColors: string[] = [
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

function getColor(): void {
  const intensity: string = (document.getElementById("color-intensity") as HTMLInputElement)?.value;
  const hue: number = Number((document.getElementById("color-hue") as HTMLInputElement)?.value);
  const color: string =
    TWColors[hue < TWColors.length ? hue : TWColors.length - 1];
  const TWColorClass: string = `bg-${color}-${intensity}`;

  document.getElementById("color-show")!.className = TWColorClass;
  document.getElementById("color")!.innerText = TWColorClass;
}
