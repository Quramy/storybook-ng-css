import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MyButtonComponent } from '../src/app/my-button/my-button.component';

storiesOf('My Button', module)
  .add('simple', () => ({
    component: MyButtonComponent,
  }));
