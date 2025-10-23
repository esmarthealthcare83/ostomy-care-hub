# 🎬 Typewriter Animation - Quick Start Guide

## 📦 What's Included

✅ **`src/hooks/useTypewriter.ts`** - React hook with typing logic  
✅ **`src/components/TypewriterText.tsx`** - Ready-to-use component  
✅ **`src/components/TypewriterDemo.tsx`** - 6 real-world examples  
✅ **Animation CSS** - Added to `src/index.css`  
✅ **Documentation** - Comprehensive examples file  

---

## 🚀 Getting Started in 2 Minutes

### Step 1: Import the Component
```tsx
import TypewriterText from '../components/TypewriterText';
```

### Step 2: Use It
```tsx
<TypewriterText 
  text="Your text here"
  speed={100}
  showCursor={true}
/>
```

That's it! 🎉

---

## 🎯 Common Use Cases

### Hero Section
```tsx
import TypewriterText from '../components/TypewriterText';

export function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">
        <TypewriterText 
          text="Welcome to Ostomy Care Hub"
          speed={100}
          className="text-blue-600"
        />
      </h1>
    </section>
  );
}
```

### Product Headlines
```tsx
<h2>
  <TypewriterText 
    text="Featured Products"
    speed={80}
    showCursor={false}
  />
</h2>
```

### Search Hints (Update Header)
```tsx
// In src/components/Header.tsx
import TypewriterText from './TypewriterText';

const hints = [
  "Search By Name",
  "Search By Product Code",
  "Search By Brands or Diameters"
];

const [currentHint, setCurrentHint] = useState(0);

// ... place in JSX:
<TypewriterText 
  text={`${hints[currentHint]}...`}
  speed={100}
  key={currentHint}
  showCursor={true}
/>
```

### Animated Description
```tsx
<p className="max-w-2xl mx-auto">
  <TypewriterText 
    text="Premium ostomy care products designed for comfort, reliability, and discretion."
    speed={50}
    delay={500}
    showCursor={false}
  />
</p>
```

---

## ⚡ Speed Presets

| Use Case | Speed (ms) | Example |
|----------|-----------|---------|
| **Urgent/Action** | 30-50 | "Limited time offer!" |
| **Standard** | 80-100 | Headlines, normal text |
| **Emphasis** | 150-200 | Important messages |
| **Full Description** | 40-60 | Long paragraphs |

---

## 🎨 Popular Props Combinations

### Minimal (Just Type)
```tsx
<TypewriterText text="Hello" />
```

### With Cursor (Default)
```tsx
<TypewriterText 
  text="Search products..." 
  speed={100}
  showCursor={true}
/>
```

### Fast Loop (Like Status Updates)
```tsx
<TypewriterText 
  text="New products added daily!"
  speed={50}
  loop={true}
  showCursor={false}
/>
```

### Delayed Start
```tsx
<TypewriterText 
  text="This appears after animation completes..."
  speed={100}
  delay={2000}
/>
```

### Custom Styled
```tsx
<TypewriterText 
  text="Premium Quality"
  speed={120}
  className="text-3xl font-bold text-blue-600"
  showCursor={true}
  cursorClassName="bg-blue-600"
/>
```

---

## 🧪 Testing the Demo Component

### View All Examples
Import and use the demo component to see 6 pre-built examples:

```tsx
import TypewriterDemo from '../components/TypewriterDemo';

export function TestPage() {
  return <TypewriterDemo />;
}
```

This shows:
1. Large hero headline
2. Fast action text
3. Rotating messages
4. Description with delay
5. Staggered multi-line
6. Custom styling

---

## 📝 Hook API (Advanced)

If you need more control, use the hook directly:

```tsx
import { useTypewriter } from '../hooks/useTypewriter';

export function CustomTypewriter() {
  const { displayText, isComplete } = useTypewriter({
    text: "Your text",
    speed: 100,
    delay: 0,
    loop: false
  });

  return (
    <div>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
}
```

**Hook Returns:**
- `displayText` - Current displayed text (updates character by character)
- `isComplete` - Boolean indicating if animation is finished

---

## 🎯 Real Integration Example: Update Header Search

### Before
```tsx
// Old header with plain placeholder
<input 
  type="text"
  placeholder={placeholders[placeholderIndex]}
  onChange={onSearchChange}
/>
```

### After
```tsx
// New header with typewriter effect
import TypewriterText from './TypewriterText';

<div className="relative">
  <input 
    type="text"
    placeholder=""
    onChange={onSearchChange}
    className="w-full px-4 py-2"
  />
  <span className="absolute left-4 top-2 text-gray-400 pointer-events-none">
    <TypewriterText 
      text={`${placeholders[placeholderIndex]}...`}
      speed={100}
      key={placeholderIndex}
      showCursor={true}
    />
  </span>
</div>
```

---

## 💪 Performance Tips

✅ **Optimal:** Use for headlines and key messages  
✅ **Good:** Use for 2-3 items in a loop  
⚠️ **Avoid:** Don't animate very long texts (500+ chars) with slow speeds  
💡 **Tip:** Use `key` prop when text changes to restart animation  

---

## 🔧 Customization Examples

### Change Cursor Color
```tsx
<TypewriterText 
  text="Text"
  cursorClassName="bg-red-500"  // Change color
/>
```

### Thicker/Thinner Cursor
```tsx
// Thicker cursor
<TypewriterText 
  text="Text"
  cursorClassName="w-1"  // Wider
/>

// Thinner cursor
<TypewriterText 
  text="Text"
  cursorClassName="w-px"  // Narrower
/>
```

### Different Text Styles
```tsx
<TypewriterText 
  text="Premium Products"
  className="text-2xl font-bold italic text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
/>
```

---

## 🆚 Comparison: With vs Without Cursor

| With Cursor | Without Cursor |
|------------|----------------|
| ✓ More interactive feel | ✓ Cleaner appearance |
| ✓ Shows animation is done | ✓ Better for bulk text |
| ✓ Better for hints/prompts | ✓ More professional |
| ✗ Can look busy | ✗ Less visual feedback |

---

## 📱 Responsive Considerations

### Mobile-Friendly
```tsx
import { useMobile } from '../hooks/use-mobile';

export function ResponsiveTypewriter() {
  const isMobile = useMobile();
  
  return (
    <TypewriterText 
      text="Your text"
      speed={isMobile ? 30 : 100}  // Faster on mobile
    />
  );
}
```

---

## ❓ FAQ

**Q: How do I restart the animation?**  
A: Use the `key` prop: `<TypewriterText key={resetTrigger} text="..." />`

**Q: Can I have multiple typewriter texts?**  
A: Yes! Use delays to stagger them: `delay={0}`, `delay={600}`, `delay={1200}`

**Q: Is it accessible?**  
A: Yes, text is rendered normally in the DOM, not using canvas. Screen readers can read it.

**Q: Performance impact?**  
A: Minimal. Uses `setTimeout` for character updates, not `requestAnimationFrame`. Lightweight.

**Q: Can I use HTML/markdown?**  
A: No, it animates plain text only. Wrap in separate elements if needed.

**Q: Does it work with SSR?**  
A: Yes! Hook uses `useEffect` so it's client-side safe.

---

## 📚 File Structure

```
src/
├── components/
│   ├── Header.tsx (can integrate here)
│   ├── TypewriterText.tsx ✨ NEW
│   └── TypewriterDemo.tsx ✨ NEW
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useTypewriter.ts ✨ NEW
├── index.css (updated with @keyframes blink)
└── ...
```

---

## 🎉 You're Ready!

Start using it now:

```tsx
import TypewriterText from '../components/TypewriterText';

export default function MyComponent() {
  return (
    <h1>
      <TypewriterText 
        text="Let's make it awesome!"
        speed={100}
        showCursor={true}
      />
    </h1>
  );
}
```

---

## 📞 Need Help?

- Check `TYPEWRITER_EXAMPLES.md` for 9+ detailed examples
- Look at `TypewriterDemo.tsx` for working component patterns
- Review the hook in `useTypewriter.ts` for advanced usage

Happy typing! 🚀✨