import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { wInfo, infoStyles } from "../utils";
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../src';


const stories = storiesOf('Button', module);
const info = withInfo({ inline: false, source: true, styles: infoStyles });
addDecorator(withKnobs);

stories.add('Primary', info(() => {
  const label = text('Text', 'Click me');
  const cta = boolean('Call to Action', false);
  return <Button kind='primary' text={label} cta={cta} onClick={() => alert("I'm a button")} />
}));

stories.add('Secondary', info(() => {
  const label = text('Text', 'Click me');
  return <Button kind='secondary' text={label} onClick={() => alert("I'm a button")} />
}));

stories.add('Danger', info(() => {
  const label = text('Text', 'Ruh roh');
  return <Button kind='danger' text={label} onClick={() => alert("This may have been a mistake")} />
}));

stories.add('Download', info(() => {
  const label = text('Text', 'Download');
  return <Button kind='download' text={label} onClick={() => alert("Downloading some file . . .")} />
}));


