(() => {

    class Accordion {
      //初期化
      constructor(obj) {

        console.log('obj',obj.tagName);

        const $elm = document.querySelector(obj.hookName);
        const $trigger = $elm.getElementsByTagName(obj.tagName);

        const triggerLength = $trigger.length
        let index = 0;
        while(index < triggerLength) {
          $trigger[index].addEventListener('click', (e)=> {
            this.clickHandler(e);
          });
          index++;
        }
      }
      //クリックしたら起こるイベント
      clickHandler = (e) => {
        e.preventDefault();

        const $target = e.currentTarget;
        const $content = $target.nextElementSibling;

        //contentが非表示の場合、contentが表示される
        if($content.style.display === 'block'){
          $content.style.display = 'none';
        //contentが表示されている場合、contentが非表示にされる
        } else {
          $content.style.display = 'block';
        }
      }
    }
    const newAccordion = new Accordion({
      hookName: '#js-accordion',
      tagName: 'a'
    });

    const newAccordion2 = new Accordion({
      hookName: '#js-accordion-mini',
      tagName: 'p'
    });

    const newAccordion3 = new Accordion({
      hookName: '#js-accordion-second',
      tagName: 'dt'
    });

})();
