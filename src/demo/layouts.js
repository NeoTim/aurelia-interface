export class Layout{
  constructor(){
    this.heading = 'aiLayout ';
    this.selectedTabRef = 'tab-1'
  }
  updateTabSliderPosition (tabsInstance, next) {
    let slider = tabsInstance.element.querySelector('.ai-tab-slider')
    let sliderWidth = 100 / tabsInstance.tabLinks.length

    slider.style.width = sliderWidth + 10 + '%';
    slider.style.left = tabsInstance.activeTabLink.offsetLeft + 'px';

    setTimeout(function(){
      slider.style.width = sliderWidth + '%';
    }, 200)

    next()
  }

}
