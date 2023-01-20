const splide = new Splide('#partnets_cards', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'start',       
      autoWidth: true,
      gap:"20px",
      start:0,      
      pagination: false, 
      arrows:false,
      flickPower: number = 10,       
      autoplay: 'pause',
    })
    splide.mount(); 
   