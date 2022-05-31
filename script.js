let toggleMenu = () => {
    let openMenu = document.querySelector(".btn-open");
    let closeMenu = document.querySelector(".btn-close");
    openMenu.addEventListener("click", () => {
      openMenu.classList.toggle("btn-back");
      closeMenu.classList.toggle("btn-front");
    });
    closeMenu.addEventListener("click", () => {
      closeMenu.classList.toggle("btn-front");
      openMenu.classList.toggle("btn-back");
    });
  };
  
  toggleMenu();

  
  let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0 ; i < acc.length ; i++){
      acc[i].addEventListener("click" , function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
          panel.style.maxHeight = null;
        }
        else{
          panel.style.maxHeight = panel.scrollHeight + "px"
        }
      });

      
    }
