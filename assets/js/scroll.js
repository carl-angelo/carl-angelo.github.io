(function(){

    var doc = document.documentElement,
        top = document.querySelector('.carl-nav');

    window.onscroll = function(){
        if(doc.scrollTop >= 650){
            top.classList.add('dark');
        }
        else{
            if(top.classList.contains('dark')){
                top.classList.remove('dark');
            }
        }
    };

})();