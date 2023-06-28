import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('blocks-course/text-box', {
	icon: {
		src: 'media-text',
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save,
});
