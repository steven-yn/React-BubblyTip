# React-BubblyTip

You can easily display a tooltip bubble UI on components in your React project.
Also use the same for Next.js projects as well as React.

# Usage

```typescript
import "react-bubblytip/lib/bubblytip.css";

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

Now available React-Bubblytip without styled-components !
I hope to support more custom styling in the future.

# Confirmed Support Coverage

- react : 17.0.0 ~ Latest Version
- next : 12.0.0 ~ Latest Version
