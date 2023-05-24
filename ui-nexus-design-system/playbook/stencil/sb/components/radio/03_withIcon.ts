import html from '!!raw-loader!../../examples/radio/03_withIcon.html'


export default  () => {
  const card = document.createElement('nexus-card');
  card.innerHTML =  html
  return card;

}