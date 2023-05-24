 
import html from '!!raw-loader!../../examples/radio/04_variants.html'

export default  () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
}


