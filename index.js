const allTabSelect = document.querySelectorAll('.tab-select');
const allTabContent = document.querySelectorAll('.tab-content');
const tabOne = document.querySelector('.tab-one')
const tabTwo = document.querySelector('.tab-two')
const tabThree = document.querySelector('.tab-three')
const tabFour = document.querySelector('.tab-four')
const tabOneContent = document.querySelector('.tab-one-content')
const tabTwoContent = document.querySelector('.tab-two-content')
const tabThreeContent = document.querySelector('.tab-three-content')
const tabFourContent = document.querySelector('.tab-four-content')

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

tabOne.addEventListener('click', () => {
  removeTopTabClass();
  removeContentClass();
  tabOne.classList.add('visible-top');
  tabOneContent.classList.add('visible-content');
});

tabTwo.addEventListener('click', () => {
  removeTopTabClass();
  removeContentClass();
  tabTwo.classList.add('visible-top');
  tabTwoContent.classList.add('visible-content');
});

tabThree.addEventListener('click', () => {
  removeTopTabClass();
  removeContentClass();
  tabThree.classList.add('visible-top');
  tabThreeContent.classList.add('visible-content');
});

tabFour.addEventListener('click', () => {
  removeTopTabClass();
  removeContentClass();
  tabFour.classList.add('visible-top');
  tabFourContent.classList.add('visible-content');
});
