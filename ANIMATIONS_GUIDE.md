# Professional Granular Scroll Animations Guide

This guide shows how to implement professional, element-specific scroll animations throughout your Victoria Park Nails and Spa website. **Each individual element animates as it comes into view**, creating a more engaging and detailed user experience.

## 🎯 What We've Implemented

### 1. **Granular Animation System**
- `animations.css` - Modern CSS animations with accessibility support
- `use-scroll-animation.ts` - React hooks for individual element animations
- `animated-elements.tsx` - Professional animated components for detailed control

### 2. **Element-Specific Implementation**
- **Individual elements** animate as they scroll into view
- **Higher thresholds** for more precise triggering
- **Staggered lists** where each item animates separately
- **Directional animations** (slideLeft, slideRight, slideUp, etc.)
- **Professional timing** with element-specific delays

## 🚀 Key Components

### AnimatedDetail - For Individual Elements
Perfect for animating specific elements within sections:

```tsx
import { AnimatedDetail } from '@/components/ui/animated-elements';

// Badge animation
<AnimatedDetail animation="fade" delay={100}>
  <Badge>About Us</Badge>
</AnimatedDetail>

// Heading animation
<AnimatedDetail animation="slideUp" delay={200}>
  <h2>Section Title</h2>
</AnimatedDetail>

// Card animation
<AnimatedDetail animation="slideLeft" delay={150}>
  <Card>Card content</Card>
</AnimatedDetail>
```

### AnimatedList - For Lists and Grids
Perfect for service cards, statistics, gallery items:

```tsx
// Each card animates individually as it comes into view
<AnimatedList 
  className="grid grid-cols-3 gap-6"
  itemDelay={150}
  itemThreshold={0.3}
>
  {items.map(item => (
    <Card key={item.id}>
      {item.content}
    </Card>
  ))}
</AnimatedList>
```

## 🎨 Animation Types & Directions

### Available Animations
- `fade` - Simple opacity fade
- `slideUp` - Fade in from bottom
- `slideDown` - Fade in from top  
- `slideLeft` - Fade in from right
- `slideRight` - Fade in from left
- `scale` - Fade in with scale effect

### Directional Usage Strategy
```tsx
// Left column content slides from left
<AnimatedDetail animation="slideLeft" delay={100}>
  <Card>Left side content</Card>
</AnimatedDetail>

// Right column content slides from right  
<AnimatedDetail animation="slideRight" delay={150}>
  <Card>Right side content</Card>
</AnimatedDetail>

// Center content slides up
<AnimatedDetail animation="slideUp" delay={200}>
  <Card>Center content</Card>
</AnimatedDetail>
```

## 📱 Real Implementation Examples

### Services Section - Individual Card Animation
```tsx
// Header elements animate individually
<AnimatedDetail animation="fade" delay={100}>
  <Badge>Popular Services</Badge>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={200}>
  <h2>Our Most Popular Nail Services</h2>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={300}>
  <p>Description text</p>
</AnimatedDetail>

// Each service card animates as it comes into view
<AnimatedList 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  itemDelay={150}
  itemThreshold={0.3}
>
  {services.map(service => (
    <Card key={service.id} className="fade-on-hover">
      {/* Service content */}
    </Card>
  ))}
</AnimatedList>
```

### About Section - Multi-Directional Animation
```tsx
// Header section
<AnimatedDetail animation="fade" delay={100}>
  <Badge>About Us</Badge>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={200}>
  <h2>Welcome to {businessInfo.name}</h2>
</AnimatedDetail>

// Left column slides from left
<AnimatedDetail animation="slideLeft" delay={100}>
  <Card>Our Story Card</Card>
</AnimatedDetail>

<AnimatedDetail animation="slideLeft" delay={200}>
  <Card>
    Statistics with individual animation:
    <AnimatedList itemDelay={100} itemThreshold={0.4}>
      {stats.map(stat => <StatCard key={stat.id} />)}
    </AnimatedList>
  </Card>
</AnimatedDetail>

// Right column slides from right
<AnimatedDetail animation="slideRight" delay={150}>
  <Card>Visit Us Card</Card>
</AnimatedDetail>

<AnimatedDetail animation="slideRight" delay={250}>
  <Card>Business Hours Card</Card>
</AnimatedDetail>
```

### Gallery Section - Individual Image Animation
```tsx
// Header elements animate individually
<AnimatedDetail animation="fade" delay={100}>
  <Badge>Our Gallery</Badge>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={200}>
  <h2>Our Work</h2>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={300}>
  <p>Description text</p>
</AnimatedDetail>

// Each gallery image fades in individually as it comes into view
<AnimatedList 
  className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4"
  itemDelay={100}     // 100ms between each image
  itemThreshold={0.2} // Lower threshold for faster triggering
>
  {images.map(image => (
    <button key={image.id} className="fade-on-hover">
      <Image src={image.src} alt={image.alt} />
    </button>
  ))}
</AnimatedList>

// Call-to-action button
<AnimatedDetail animation="slideUp" delay={400}>
  <Button>View Full Gallery</Button>
</AnimatedDetail>
```

### Services Filter - Form Element Animation
```tsx
// Search input animates first
<AnimatedDetail animation="slideUp" delay={100}>
  <form>
    <Input placeholder="Search services..." />
  </form>
</AnimatedDetail>

// Category selector animates second
<AnimatedDetail animation="slideUp" delay={200}>
  <Select>
    <SelectTrigger>Category Filter</SelectTrigger>
  </Select>
</AnimatedDetail>
```

### Services List - Individual Service Cards
```tsx
// Services page with filtered results
<AnimatedDetail animation="slideUp" delay={100}>
  <h2>Our Services</h2>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={200}>
  <ServicesFilter />
</AnimatedDetail>

// Each service card animates as it comes into view
<AnimatedList 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  itemDelay={120}     // 120ms between each service card
  itemThreshold={0.3} // 30% visibility required
>
  {services.map(service => (
    <Card key={service.id} className="fade-on-hover">
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
    </Card>
  ))}
</AnimatedList>
```

### Team Section - Individual Team Member Animation
```tsx
// Header elements animate individually
<AnimatedDetail animation="fade" delay={100}>
  <Badge>Our Team</Badge>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={200}>
  <h2>Meet Our Expert Professionals</h2>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={300}>
  <p>Description about the team</p>
</AnimatedDetail>

// Each team member card animates individually
<AnimatedList 
  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
  itemDelay={150}     // 150ms between each team member
  itemThreshold={0.3} // 30% visibility required
>
  {teamMembers.map(member => (
    <Card key={member.id} className="fade-on-hover">
      <CardHeader>
        <Avatar>{member.name}</Avatar>
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.position}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{member.bio}</p>
        <div className="specialties">
          {member.specialties.map(specialty => (
            <Badge key={specialty}>{specialty}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  ))}
</AnimatedList>
```

### FAQ Section - Question & Answer Animation
```tsx
// Header elements animate individually
<AnimatedDetail animation="fade" delay={100}>
  <Badge>FAQ</Badge>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={200}>
  <h2>Frequently Asked Questions</h2>
</AnimatedDetail>

<AnimatedDetail animation="slideUp" delay={300}>
  <p>Find answers to common questions</p>
</AnimatedDetail>

// FAQ categories animate individually
<AnimatedList 
  className="space-y-10 sm:space-y-12"
  itemDelay={200}     // 200ms between each category
  itemThreshold={0.3}
>
  {categories.map(category => (
    <div key={category}>
      <AnimatedDetail animation="slideUp" delay={100}>
        <h3>{category} Questions</h3>
      </AnimatedDetail>
      
      <Accordion>
        <AnimatedList 
          className="space-y-4"
          itemDelay={150}     // 150ms between each FAQ item
          itemThreshold={0.4} // Higher threshold for precision
        >
          {faqs.map(faq => (
            <AccordionItem key={faq.id} className="fade-on-hover">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </AnimatedList>
      </Accordion>
    </div>
  ))}
</AnimatedList>
```

## 🎯 Professional Timing Strategy

### 1. **Header Sequence** (100-300ms delays)
```tsx
<AnimatedDetail delay={100}>Badge</AnimatedDetail>
<AnimatedDetail delay={200}>Title</AnimatedDetail>  
<AnimatedDetail delay={300}>Subtitle</AnimatedDetail>
```

### 2. **Content Cards** (100-250ms delays)
```tsx
<AnimatedDetail delay={100}>First Card</AnimatedDetail>
<AnimatedDetail delay={150}>Second Card</AnimatedDetail>
<AnimatedDetail delay={200}>Third Card</AnimatedDetail>
```

### 3. **List Items** (100-200ms between items)
```tsx
<AnimatedList itemDelay={150}>
  {/* Each item animates 150ms after the previous */}
</AnimatedList>
```

## 🎨 Advanced Configuration

### Higher Precision Triggering
```tsx
// More precise triggering for individual elements
<AnimatedDetail 
  animation="slideUp"
  delay={200}
  threshold={0.3}  // 30% of element must be visible
>
  <DetailedContent />
</AnimatedDetail>

// Even more precise for small elements
<AnimatedDetail 
  threshold={0.4}  // 40% visible before animating
  delay={100}
>
  <SmallElement />
</AnimatedDetail>
```

### Multiple Elements with Individual Control
```tsx
<AnimatedList
  itemDelay={100}        // 100ms between each item
  itemThreshold={0.4}    // Each item needs 40% visibility
  className="grid grid-cols-3 gap-6"
>
  {items.map(item => <ItemCard key={item.id} />)}
</AnimatedList>
```

## ♿ Accessibility & Performance

### Automatic Accessibility Support
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled for users who prefer reduced motion */
  .fade-in-on-scroll {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

### Performance Optimized
- **Intersection Observer API** - Efficient scroll detection
- **Higher thresholds** (0.3-0.4) for precise triggering
- **Individual element tracking** prevents unnecessary calculations
- **CSS transforms** for hardware acceleration

## 🎯 Visual Results

With this implementation:

1. **Badge appears first** (fade animation)
2. **Title slides up** 100ms later
3. **Subtitle slides up** 200ms after title
4. **Left cards slide from left** as they come into view
5. **Right cards slide from right** as they come into view  
6. **List items animate individually** with staggered timing
7. **Statistics animate one by one** within their container

## 📝 How to Apply to Other Sections

### Gallery Section
```tsx
<AnimatedDetail animation="fade" delay={100}>
  <Badge>Our Work</Badge>
</AnimatedDetail>

<AnimatedList 
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  itemDelay={100}
>
  {images.map(image => (
    <img key={image.id} className="fade-on-hover" />
  ))}
</AnimatedList>
```

### Testimonials Section
```tsx
<AnimatedList 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  itemDelay={200}
>
  {testimonials.map(testimonial => (
    <TestimonialCard key={testimonial.id} />
  ))}
</AnimatedList>
```

This creates a much more engaging experience where users see individual elements come to life as they scroll, rather than entire sections appearing at once!
