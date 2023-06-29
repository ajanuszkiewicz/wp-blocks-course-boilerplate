/* eslint-disable no-console */

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={text}
						onChange={onChangeText}
						help="Help text goes here"
					/>
					<TextareaControl
						label="Text Label"
						value={text}
						onChange={onChangeText}
						help="Help text goes here"
					/>
					<ToggleControl
						label="Toggle Label"
						checked={true}
						onChange={(value) => console.log(value)}
					/>
					<ColorPicker
						color={'#f03'}
						onChange={(value) => console.log(value)}
					/>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#f0' },
							{ name: 'black', color: '#000' },
						]}
						onChange={(value) => console.log(value)}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your text goes here')}
				tagName="h4"
				allowedFormats={['core/bold']}
			/>
		</>
	);
}
