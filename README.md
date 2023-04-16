# React-BubblyTip

You can easily display a tooltip bubble UI on components in your React project.
Also use the same for Next.js projects as well as React.

---

# Usage

```typescript
const Temp = () => {
  const [isView, msgPush] = useBubblyTip();

  const onClick = () => {
    msgPush((push) => !push);
  };

  return (
    <div className="Container">
      <button onClick={onClick}>
        push bubbly
        <BubblyTip push={isView}>Here is!</BubblyTip>
      </button>
    </div>
  );
};
```
