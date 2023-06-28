import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<RichText
			{...useBlockProps()}
			onChange={(value) => setAttributes({ value })}
			value={text}
			placeholder={__('Your text goes here')}
			tagName="h4"
			allowedFormats={['core/bold']}
		/>
	);
}
