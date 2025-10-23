# Typewriter Animation - Usage Examples

The typewriter effect displays text character by character, creating a typing animation effect. Perfect for engaging headlines, product descriptions, or welcome messages.

## 📁 Files Created

1. **`src/hooks/useTypewriter.ts`** - React hook that manages the typing logic
2. **`src/components/TypewriterText.tsx`** - React component using the hook
3. **`src/index.css`** - Added `@keyframes blink` animation

---

## 🚀 Basic Usage

### Example 1: Simple Typewriter Text

```tsx
import TypewriterText from '../components/TypewriterText';

export default function Hero() {
  return (
    <h1>
      <TypewriterText 
        text="Welcome to Ostomy Care Hub" 
        speed={100}
        showCursor={true}
      />
    </h1>
  );
}
```

**Output:**
```
Welcome to Ostomy Care Hub|  (cursor blinking)
```

---

## 📝 Examples by Use Case

### Example 2: Product Headlines (Slow Typing)

```tsx
<h2>
  <TypewriterText 
    text="Premium Coloplast Ostomy Care Products"
    speed={150}  // Slower, more dramatic
    showCursor={true}
    className="text-3xl font-bold text-blue-600"
  />
</h2>
```

### Example 3: Multiple Messages Looping

```tsx
<TypewriterText 
  text="Explore our complete product range"
  speed={80}  // Faster typing
  loop={true}  // Repeats automatically
  showCursor={true}
/>
```

### Example 4: Product Description

```tsx
<p>
  <TypewriterText 
    text="Designed with comfort and reliability in mind, our products provide secure protection and discretion for your daily needs."
    speed={50}  // Very fast
    delay={500}  // Wait 0.5 seconds before starting
    className="text-gray-700"
    showCursor={false}  // No cursor for full descriptions
  />
</p>
```

### Example 5: No Cursor (Cleaner Look)

```tsx
<span>
  <TypewriterText 
    text="Call us today: +1-800-OSTOMY"
    speed={100}
    showCursor={false}
    className="font-semibold"
  />
</span>
```

---

## 🎨 TypewriterText Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | Required | The text to display with typing animation |
| `speed` | `number` | 100 | Milliseconds between each character (lower = faster) |
| `delay` | `number` | 0 | Milliseconds to wait before starting animation |
| `loop` | `boolean` | false | Whether to repeat the animation endlessly |
| `className` | `string` | '' | Tailwind/CSS classes for styling |
| `showCursor` | `boolean` | true | Whether to show the blinking cursor |
| `cursorClassName` | `string` | '' | Custom classes for cursor styling |

---

## ⚡ Speed Reference

| Speed (ms) | Effect | Best For |
|-----------|--------|----------|
| 30-50 | Very fast | Short text, urgency |
| 80-100 | Normal | Headlines, standard text |
| 150-200 | Slow | Emphasis, dramatic effect |
| 300+ | Very slow | Important messages |

---

## 💡 Advanced Examples

### Example 6: With Custom Styling

```tsx
<TypewriterText 
  text="Your health, our priority"
  speed={120}
  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
  showCursor={true}
  cursorClassName="bg-blue-600"
/>
```

### Example 7: For Search Hints (Multiple Rotating)

```tsx
const hints = [
  "Search by Product Name",
  "Search by Product Code",
  "Search by Brand or Diameter"
];

const [currentHint, setCurrentHint] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentHint(prev => (prev + 1) % hints.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);

<TypewriterText
  text={hints[currentHint]}
  speed={100}
  key={currentHint}  // Reset animation on change
  showCursor={true}
/>
```

### Example 8: Form Labels

```tsx
<label>
  <TypewriterText 
    text="Enter your full name"
    speed={80}
    showCursor={false}
    className="block text-sm font-medium text-gray-700 mb-2"
  />
</label>
```

### Example 9: Staggered Text (Sequential)

```tsx
export function StaggeredText() {
  return (
    <div>
      <TypewriterText text="Premium" speed={100} delay={0} />
      <TypewriterText text="Ostomy" speed={100} delay={600} />
      <TypewriterText text="Solutions" speed={100} delay={1200} />
    </div>
  );
}
```

---

## 🔧 Customization Tips

### Make Cursor Thicker
```tsx
<TypewriterText 
  text="Your text"
  cursorClassName="w-1 h-6"  // w-1 = thicker
/>
```

### Different Cursor Color
```tsx
<TypewriterText 
  text="Your text"
  cursorClassName="bg-red-500"  // Custom color
/>
```

### No Animation on Mobile (Performance)
```tsx
import { useMobile } from '../hooks/use-mobile';

export function ResponsiveTypewriter() {
  const isMobile = useMobile();
  
  return (
    <TypewriterText 
      text="Your text"
      speed={isMobile ? 10 : 100}  // Instant on mobile
    />
  );
}
```

---

## 📊 Performance Notes

- ✅ Smooth on most devices
- ⚠️ For very long texts (500+ characters), consider reducing animation length or splitting into sections
- 💪 Works great with React's concurrent rendering
- 🎯 Re-mounts component to restart animation (use `key` prop when text changes)

---

## 🎯 Real-World Integration Example

```tsx
import TypewriterText from '../components/TypewriterText';

export default function HomePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          <TypewriterText 
            text="Welcome to Ostomy Care Hub"
            speed={100}
            showCursor={true}
            className="text-blue-600"
          />
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          <TypewriterText 
            text="Professional care products delivered to your door"
            speed={80}
            delay={1500}  // Start after headline
            showCursor={false}
          />
        </p>
        
        <button className="btn-hero">
          Get Started
        </button>
      </div>
    </section>
  );
}
```

---

## ✨ Features

✅ Character-by-character typing animation  
✅ Customizable speed  
✅ Optional blinking cursor  
✅ Loop capability for repeating messages  
✅ Delay before start animation  
✅ Full Tailwind CSS support  
✅ TypeScript support  
✅ Lightweight hook-based implementation  
✅ Works with all text lengths  

Enjoy! 🎉