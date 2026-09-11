
class SetCls {
  constructor() {
    this.dataStore = [];
  }

  contains(data) {
    return this.dataStore.indexOf(data) > -1;
  }

  add(data) {
    if (!this.contains(data)) {
      this.dataStore.push(data);
      this.dataStore.sort();
      return true;
    }
    return false;
  }

  remove(data) {
    const pos = this.dataStore.indexOf(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    }
    return false;
  }

  show() {
    return `<ul>${this.dataStore.map(s => `<li>${s}</li>`).join('')}</ul>`;
  }

  union(otherSet) {
    const tempSet = new SetCls();
    this.dataStore.forEach(s => {
      tempSet.add(s);
    });
    otherSet.dataStore.forEach(s => {
      tempSet.add(s);
    });
    return tempSet;
  }

  intersect(otherSet) {
    const tempSet = new SetCls();
    this.dataStore.forEach(s => {
      if (otherSet.contains(s)) {
        tempSet.add(s);
      }
    });
    return tempSet;
  }

  size() {
    return this.dataStore.length;
  }

  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    this.dataStore.forEach(member => {
      if (!otherSet.contains(member)) {
        return false;
      }
    });
    return true;
  }

  difference(otherSet) {
    const tempSet = new SetCls();
    this.dataStore.forEach(member => {
      if (!otherSet.contains(member)) {
        tempSet.add(member);
      }
    });
    return tempSet;
  }

  higher(element) {
    /*for (let i = 0; i < this.size(); i++) {
        if (this.dataStore[i] > element) {
            return this.dataStore[i];
        }
    }*/
    const ind = this.dataStore.indexOf(element);
    if (ind > 0 && ind < this.size() - 1) {
      return this.dataStore[ind + 1];
    }
  }

  lower(element) {
    const ind = this.dataStore.indexOf(element);
    if (ind > 0) {
      return this.dataStore[ind - 1];
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Exercise 1
  const one = new SetCls();
  const txtInput = document.getElementById('txtInput');
  const ex1Div = document.getElementById('ex1');
  const higherElementInput = document.getElementById('higherElement');
  const greaterResultSpan = document.getElementById('greaterResult');
  const lowerElementInput = document.getElementById('lowerElement');
  const lowerResultSpan = document.getElementById('lowerResult');

  function createSet() {
    if (txtInput && ex1Div) {
      txtInput.value.split('').forEach(s => {
        console.log('createSet', s)
        one.add(s);
      });
      ex1Div.innerHTML = one.show();
    }
  }
  document.getElementById('createSet').addEventListener('click', createSet);

  // Exercise 3
  function getGreater() {
    if (higherElementInput && greaterResultSpan) {
      greaterResultSpan.textContent = one.higher(higherElementInput.value);
    }
  }
  document.getElementById('getGreater').addEventListener('click', getGreater);

  // Exercise 4
  function getLower() {
    if (lowerElementInput && lowerResultSpan) {
      lowerResultSpan.textContent = one.lower(lowerElementInput.value);
    }
  }
  document.getElementById('getLower').addEventListener('click', getLower);
});