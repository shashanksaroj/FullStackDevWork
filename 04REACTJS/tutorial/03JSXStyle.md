
---

# 📒 React Notes – Dark Mode + Inline Styles

## 🧩 Concepts Covered

1. **Adding more functionalities** → using `useState` for toggling
2. **Using styles inside JSX** → passing objects to `style={...}`

---

## ⚡ Key React Hooks Used

* `useState` → lets components hold and update state.

Example:

```js
const [btntxt, setBtntxt] = useState("enable dark mode")
const [mystyle, setMystyle] = useState({
  color: "white",
  backgroundColor: "black",
})
```

---

## 🎨 Inline Styling in JSX

* Styles in React are just **JS objects**.
* Property names use **camelCase** (`backgroundColor`, not `background-color`).

```js
const [mystyle, setMystyle] = useState({
  color: "white",
  backgroundColor: "black",
})
```

Usage:

```jsx
<div style={mystyle}>Hello World</div>
```

---

## 🌗 Dark Mode Toggle Logic

👉 Idea: flip colors based on current state.

```js
let toggleDarkMode = () => {
  if (mystyle.color === "white") {
    setMystyle({ color: "black", backgroundColor: "white" })
    setBtntxt("enable dark mode")
  } else {
    setMystyle({ color: "white", backgroundColor: "black" })
    setBtntxt("enable white mode")
  }
}
```

🧠 Trick: State updates re-render → UI changes instantly.

---

## 🪄 Accordion Example (Bootstrap + React)

* Uses Bootstrap’s **accordion** UI.
* Inline style applied to **every accordion part**.
* All items adapt to **dark mode toggle**.

```jsx
<div className="accordion-item" style={mystyle}>
  <h2 className="accordion-header">
    <button className="accordion-button" style={mystyle}>
      Accordion Item
    </button>
  </h2>
</div>
```

---

## 🔘 The Button

* Toggles theme when clicked
* Text changes dynamically using `btntxt` state.

```jsx
<button className="btn btn-primary" onClick={toggleDarkMode}>
  {btntxt}
</button>
```

---

## 💡 ADHD Quick Recall

* 🎛 `useState` = memory box 📦 for values that change.
* 🎨 `style={...}` = pass a **JS object** (camelCase keys).
* 🌗 Dark mode = just **flip values** of the style object.
* 🌀 Accordion = Bootstrap component + React state = 🔥 dynamic UI.
* 🔘 Button = triggers function → updates state → rerenders.

---

