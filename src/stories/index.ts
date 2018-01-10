import { storiesOf } from '@storybook/angular';
// import { action } from '@storybook/addon-actions';
// import { MyButtonComponent } from '../app/my-button/my-button.component';
import { ButtonWithCssComponent } from '../app/button-with-css/button-with-css.component';
import { ButtonWithScssComponent } from '../app/button-with-scss/button-with-scss.component';
import { ButtonWithGlobalComponent } from '../app/button-with-global/button-with-global.component';

// storiesOf('My Button', module)
//   .add('simple', () => ({
//     component: MyButtonComponent,
//   }));

storiesOf('Styles', module)
  .add('with CSS', () => ({
    component: ButtonWithCssComponent,
  }))
  .add('with SASS', () => ({
    component: ButtonWithScssComponent,
  }))
  .add('with Global style css', () => ({
    component: ButtonWithGlobalComponent,
  }))
  ;
