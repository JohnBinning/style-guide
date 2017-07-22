const allTabSelect = document.querySelectorAll('.tab-select');
const allTabContent = document.querySelectorAll('.tab-content');
const tabOne = document.querySelectorAll('.tab-one');
const tabTwo = document.querySelectorAll('.tab-two');
const tabThree = document.querySelectorAll('.tab-three');
const tabFour = document.querySelectorAll('.tab-four');
const tabOneContent = document.querySelectorAll('.tab-one-content');
const tabTwoContent = document.querySelectorAll('.tab-two-content');
const tabThreeContent = document.querySelectorAll('.tab-three-content');
const tabFourContent = document.querySelectorAll('.tab-four-content');

const removeTopTabClass = () => {
  allTabSelect.forEach((tab) => {
      tab.classList.remove('visible-top');
  });
};

const removeContentClass = () => {
  allTabContent.forEach((tab) => {
      tab.classList.remove('visible-content');
  });
};

tabOne.forEach( tab => {
  tab.addEventListener('click', () => {
    removeTopTabClass();
    removeContentClass();
    tab.classList.add('visible-top');
    tabOneContent.forEach( tabContent => {
      tabContent.classList.add('visible-content');
    });
  });
});

tabTwo.forEach( tab => {
  tab.addEventListener('click', () => {
      removeTopTabClass();
      removeContentClass();
      tab.classList.add('visible-top');
      tabTwoContent.forEach( tabContent => {
        tabContent.classList.add('visible-content');
      });
    });
});

tabThree.forEach( tab => {
  tab.addEventListener('click', () => {
      removeTopTabClass();
      removeContentClass();
      tab.classList.add('visible-top');
      tabThreeContent.forEach( tabContent => {
        tabContent.classList.add('visible-content');
      })
    });
});

tabFour.forEach( tab => {
  tab.addEventListener('click', () => {
      removeTopTabClass();
      removeContentClass();
      tab.classList.add('visible-top');
      tabFourContent.forEach( tabContent => {
        tabContent.classList.add('visible-content');
      })
    });
});
