
---

# 🌗 React Revision Notes – Toggle Mode + Style Object

## 1️⃣ Toggle Modes for the Entire Website

* **State hook** is used to track mode (`light` / `dark`).

  ```js
  const [mode, setMode] = useState("light")
  ```

* **Toggle function** switches between modes:

  ```js
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey"; // 🌑 dark bg
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // ☀️ light bg
    }
  }
  ```

* **Passed as prop** to child components like `Navbar` & `TextForm` so they can change UI colors based on `mode`.

* **Inside JSX**, conditional styling:

  ```jsx
  style={{ color: props.mode === "dark" ? "white" : "black" }}
  ```

👉 This way, **one toggle affects the entire website** since background + all text styles depend on the same `mode` state.

---

## 2️⃣ JavaScript Style Object (in React)

* In React, the `style` prop takes a **JavaScript object** instead of a CSS string.

### Syntax:

```jsx
<div style={{ color: "red", backgroundColor: "black" }}>
  Hello World
</div>
```

⚡ Key points:

* Keys are **camelCase** (e.g., `backgroundColor` not `background-color`).

* Values are **strings** (usually) → `"10px"`, `"blue"`.

* Can use **ternary operators** for dynamic styles:

  ```jsx
  style={{ color: props.mode === "dark" ? "white" : "black" }}
  ```

* You can also **store in a variable**:

  ```js
  const myStyle = {
    color: "white",
    backgroundColor: "black",
  };
  ```

  Then:

  ```jsx
  <div style={myStyle}>Dark Mode</div>
  ```

---

## 3️⃣ Extra Notes on Your Code

* 🔠 `handleUpClick` → converts text to **uppercase**.
* 🔡 `handleLowClick` → converts text to **lowercase** + shows alert.
* ❌ `handleDelete` → clears the textarea.
* ✍️ `onChange` → updates state when typing.
* 📝 Summary section → shows **word count, char count, read time**.
* 👀 Preview → shows text if available, else `"Nothing to preview!"`.

---

✅ **Revision Flow**:

* `App.js` → manages `mode` (light/dark).
* Passes `mode` + `toggleMode` down as props.
* Components (`Navbar`, `TextForm`) apply styles via **style object** using `props.mode`.

---

