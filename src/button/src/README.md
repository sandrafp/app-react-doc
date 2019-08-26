### Basic button:

basic button provide a HTML <button>button</button>

```jsx
<>
  <Button>Button Basic</Button>
  <Button disabled>Button Disabled</Button>
</>
```

#### Usage

```jsx
import Button from "../src/Button";
<Button>Button Basic</Button>;
```

#### Buttons Type:

modify type of button, basic button is type="button" by default without props "type".

```jsx
import { ButtonType } from "../src/Button";
<>
  <Button type={ButtonType.Button}>Type Button</Button>
  <Button type={ButtonType.Reset}>Type Reset</Button>
  <Button type={ButtonType.Submit}>Type Submit</Button>
</>;
```

### Examples

Use any of the available button style types to quickly create a styled button.

#### Buttons Variants:

modify the variant prop for create a button with template state.

```jsx
import { ButtonVariant } from "../src/Button";
<>
  <Button variant={ButtonVariant.Primary}>Button Primary</Button>
  <Button variant={ButtonVariant.Secondary}>Button Secondary</Button>
  <Button variant={ButtonVariant.Success}>Button Success</Button>
  <Button variant={ButtonVariant.Danger}>Button Danger</Button>
  <Button variant={ButtonVariant.Warning}>Button Warning</Button>
  <Button variant={ButtonVariant.Info}>Button Info</Button>
</>;
```

#### Buttons Outline:

Buttons also come in outline style with no background color for this set outline props.

```jsx
import { ButtonVariant } from "../src/Button";
<>
  <Button variant={ButtonVariant.Primary} outline>
    Button Primary
  </Button>
  <Button variant={ButtonVariant.Secondary} outline>
    Button Secondary
  </Button>
  <Button variant={ButtonVariant.Success} outline>
    Button Success
  </Button>
  <Button variant={ButtonVariant.Danger} outline>
    Button Danger
  </Button>
  <Button variant={ButtonVariant.Warning} outline>
    Button Warning
  </Button>
  <Button variant={ButtonVariant.Info} outline>
    Button Info
  </Button>
</>;
```

#### Button sizes:

Button default is medium but you include a sizes variant "ExtraSmall", "Small", "Large".

```jsx
import { ButtonSizes } from "../src/Button";
<>
  <Button size={ButtonSizes.ExtraSmall}>Button ExtraSmall</Button>
  <Button size={ButtonSizes.Small}>Button Small</Button>
  <Button size={ButtonSizes.Medium}>Button Medium</Button>
  <Button size={ButtonSizes.Large}>Button Large</Button>
</>;
```

#### Button Block:

Button block size full width of a parent

```jsx
<div>
  <Button block>Button Block</Button>
  <Button block>Button Block</Button>
</div>
```

#### Button custom Icon:

Button with custom Icon provide sizes

```jsx
import { ButtonSizes } from "../src/Button";
import IconWrapper from "../src/components/icon-wrapper/IconWrapper";
const icon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="check-circle"
    className="svg-inline--fa fa-check-circle fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
    />
  </svg>
);
<>
  <Button size={ButtonSizes.ExtraSmall} icon={icon}>
    Button Icon
  </Button>
  <Button size={ButtonSizes.Small} icon={icon}>
    Button Icon
  </Button>
  <Button size={ButtonSizes.Medium} icon={icon}>
    Button Icon
  </Button>
  <Button size={ButtonSizes.Large} icon={icon}>
    Button Icon
  </Button>
</>;
```

#### Props

You can specify the button's attributes styles by setting the props in button tag.

| Attribute | Type          | Description                                                              | Values                                                         |
| --------- | ------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| variant   | ButtonVariant | (optional) Define styles for state. Default: "Primay"                    | "Primary", "Secondary", "Success", "Danger", "Warning", "Info" |
| outline   | boolean       | (optional) Define styles for variant. Default: "false"                   | "true", "false"                                                |
| size      | ButtonSizes   | (optional) Define styles for size. Default: "Md"                         | "Xs", "Sm", "Md", "Lg"                                         |
| block     | boolean       | (optional) Define display of button tag. Default: "false"                | "true", "false"                                                |
| type      | ButtonTypes   | (optional) Define type for button tag. Default: button                   | "button", "submit", "reset"                                    |
| color     | ButtonColors  | (optional) Define aditional color palette for button tag. Default: unset | Red", Blue", Green", Grey", "Yellow"                           |
| opacity   | ButtonOpacity | (optional) Define opacity of ButtonColors.value, Default: "null"         | "Opacity75", "Opacity50", "Opacity25                           |
| ariaLabel | string        | (opcitional), Define accessibility complementary label                   |                                                                |
| className | string        | (optional), Define the class for styles and helpers utilities.           |                                                                |
|           |
