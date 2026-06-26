# Component Architecture: Comparison Slider

The `<Comparison />` component is the core interactive feature of the `carwash-leasing-frontend` application. It allows users to visually compare outdated wash bays with modernized setups using a draggable slider.

## State Management

This component utilizes React's `useState` hook to manage two primary pieces of state:

- `sliderPosition` (Integer): Defaults to `50`. Tracks the percentage position of the slider handle (0-100) to dynamically adjust the CSS `clipPath` of the overlay image.
- `activeIndex` (Integer): Defaults to `0`. Tracks which wash bay location is currently selected from the thumbnail navigation, updating the main display images accordingly.

## Data Configuration

The component renders data dynamically from the internal `washBays` array.

### Schema

| Property | Type   | Description                                   |
| :------- | :----- | :-------------------------------------------- |
| `id`     | Int    | Unique identifier for React list keys.        |
| `title`  | String | Renders inside the absolute positioned badge. |
| `before` | String | Path to the outdated image (clipped layer).   |
| `after`  | String | Path to the modernized image (base layer).    |

## Event Handlers

### `handleThumbnailClick(index)`

- **Parameters:** `index` (Integer) - The array index of the clicked thumbnail.
- **Behavior:** Updates the `activeIndex` state to render the new image pairing and resets the `sliderPosition` back to `50` (center) for a consistent user experience upon switching images.

## Rendering Logic

- **Base Layer (After):** A static `<img>` tag showing the modernized wash bay.
- **Clipped Layer (Before):** Positioned absolutely over the base layer. It uses an inline style for `clipPath: inset(0 ${100 - sliderPosition}% 0 0)` to dynamically reveal the base layer as the user drags the input handle.
