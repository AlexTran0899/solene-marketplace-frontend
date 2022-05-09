import './Nav.css'
import { useState, useEffect } from 'react';

function Nav() {
  const [values, setValues] = useState(null)
  const [search, setSearch] = useState(null)

  const onSubmit = e => {
    e.preventDefault()
    setSearch(values)
  }
  const onChange = (e) => {
    const { value } = e.target;
    setValues(value);
  };
  const [text, setText] = useState(null)
  let isDeleting = false
  const words = ["'login'", "'signup'", "'github'", 'anything']
  const wait = 2000
  let txt = ''
  let wordIndex = 0

  const type = () => {
    const current = wordIndex % words.length;
    const fullTxt = words[current];
    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }
    setText(txt)
    let typeSpeed = 100;
    if (isDeleting) {
      typeSpeed /= 2;
    }
    if (!isDeleting && txt === fullTxt) {
      isDeleting = true
      typeSpeed = wait;
    } else if (isDeleting && txt === '') {
      isDeleting = false
      wordIndex++;
      typeSpeed = 500;
    }
    setTimeout(() => type(), typeSpeed);
  }
  useEffect(() => {
    type()
  }, [])


  return (
      <input
        id='search'
        type='search'
        value={values}
        onChange={onChange}
        placeholder={`Search ${text}`}>
      </input>
  );
}

export default Nav;