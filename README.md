# React-BubblyTip

You can easily display a tooltip bubble UI on components in your React project.
Also use the same for Next.js projects as well as React.

# Usage

```typescript
const Temp = () => {
  const [isView, msgPush] = useBubblyTip();

  const onClick = () => {
    msgPush((push) => !push);
  };

  return (
    <div className="Container" style={{ position: "relative" }}>
      <button onClick={onClick} style={{ width: "100%" }}>
        push bubbly
      </button>
      <BubblyTip push={isView}>Here is!</BubblyTip>
    </div>
  );
};
```

# Comments

The current stylesheet is Styled-Components. \
This is because we've imported the code that we've been working with so that we can just publish it without any problems. \
This is still experimental, and we'll soon remove the dependency on Styled-Components and make it easier to manipulate the desired UI by passing in props.

# Confirmed Support Coverage

- react : 17.0.0 ~ Latest Version
- next : 12.0.0 ~ Latest Version
- styled-components
