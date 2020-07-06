import {
	IFieldTemplateDetailOptions,
	IFieldDefinition
} from '@sprucelabs/schema'
import AbstractField from '@sprucelabs/schema/build/fields/AbstractField'
import FieldType from '#spruce/schemas/fields/fieldType'

export type IEventCallbackName =
	| 'React.SyntheticEvent<...>'
	| 'React.ClipboardEvent<...>'
	| 'React.CompositionEvent<...>'
	| 'React.DragEvent<...>'
	| 'React.PointerEvent<...>'
	| 'React.FocusEvent<...>'
	| 'React.FormEvent<...>'
	| 'React.InvalidEvent<...>'
	| 'React.ChangeEvent<...>'
	| 'React.KeyboardEvent<...>'
	| 'React.MouseEvent<...>'
	| 'React.TouchEvent<...>'
	| 'React.UIEvent<...>'
	| 'React.WheelEvent<...>'
	| 'React.AnimationEvent<...>'
	| 'React.TransitionEvent<...>'

export type IEventCallbackParams =
	| 'Element'
	| 'HTMLElement'
	| 'HTMLAnchorElement'
	| 'HTMLAreaElement'
	| 'HTMLAudioElement'
	| 'HTMLBaseElement'
	| 'HTMLBodyElement'
	| 'HTMLBRElement'
	| 'HTMLButtonElement'
	| 'HTMLCanvasElement'
	| 'HTMLDataElement'
	| 'HTMLDataListElement'
	| 'HTMLDialogElement'
	| 'HTMLDivElement'
	| 'HTMLDListElement'
	| 'HTMLEmbedElement'
	| 'HTMLFieldSetElement'
	| 'HTMLFormElement'
	| 'HTMLHeadingElement'
	| 'HTMLHeadElement'
	| 'HTMLHRElement'
	| 'HTMLHtmlElement'
	| 'HTMLIFrameElement'
	| 'HTMLImageElement'
	| 'HTMLInputElement'
	| 'HTMLModElement'
	| 'HTMLLabelElement'
	| 'HTMLLegendElement'
	| 'HTMLLIElement'
	| 'HTMLLinkElement'
	| 'HTMLMapElement'
	| 'HTMLMetaElement'
	| 'HTMLObjectElement'
	| 'HTMLOListElement'
	| 'HTMLOptGroupElement'
	| 'HTMLOptionElement'
	| 'HTMLParagraphElement'
	| 'HTMLParamElement'
	| 'HTMLPreElement'
	| 'HTMLProgressElement'
	| 'HTMLQuoteElement'
	| 'HTMLScriptElement'
	| 'HTMLSelectElement'
	| 'HTMLSourceElement'
	| 'HTMLSpanElement'
	| 'HTMLStyleElement'
	| 'HTMLTableElement'
	| 'HTMLTableColElement'
	| 'HTMLTableDataCellElement'
	| 'HTMLTableHeaderCellElement'
	| 'HTMLTableRowElement'
	| 'HTMLTableSectionElement'
	| 'HTMLTemplateElement'
	| 'HTMLTextAreaElement'
	| 'HTMLTitleElement'
	| 'HTMLTrackElement'
	| 'HTMLUListElement'
	| 'HTMLVideoElement'
	| 'HTMLWebViewElement'
	| 'SVGElement'
	| 'SVGSVGElement'
	| 'SVGCircleElement'
	| 'SVGClipPathElement'
	| 'SVGDefsElement'
	| 'SVGDescElement'
	| 'SVGEllipseElement'
	| 'SVGFEBlendElement'
	| 'SVGFEColorMatrixElement'
	| 'SVGFEComponentTransferElement'
	| 'SVGFECompositeElement'
	| 'SVGFEConvolveMatrixElement'
	| 'SVGFEDiffuseLightingElement'
	| 'SVGFEDisplacementMapElement'
	| 'SVGFEDistantLightElement'
	| 'SVGFEDropShadowElement'
	| 'SVGFEFloodElement'
	| 'SVGFEFuncAElement'
	| 'SVGFEFuncBElement'
	| 'SVGFEFuncGElement'
	| 'SVGFEFuncRElement'
	| 'SVGFEGaussianBlurElement'
	| 'SVGFEImageElement'
	| 'SVGFEMergeElement'
	| 'SVGFEMergeNodeElement'
	| 'SVGFEMorphologyElement'
	| 'SVGFEOffsetElement'
	| 'SVGFEPointLightElement'
	| 'SVGFESpecularLightingElement'
	| 'SVGFESpotLightElement'
	| 'SVGFETileElement'
	| 'SVGFETurbulenceElement'
	| 'SVGFilterElement'
	| 'SVGForeignObjectElement'
	| 'SVGGElement'
	| 'SVGImageElement'
	| 'SVGLineElement'
	| 'SVGLinearGradientElement'
	| 'SVGMarkerElement'
	| 'SVGMaskElement'
	| 'SVGMetadataElement'
	| 'SVGPathElement'
	| 'SVGPatternElement'
	| 'SVGPolygonElement'
	| 'SVGPolylineElement'
	| 'SVGRadialGradientElement'
	| 'SVGRectElement'
	| 'SVGStopElement'
	| 'SVGSwitchElement'
	| 'SVGSymbolElement'
	| 'SVGTextElement'
	| 'SVGTextPathElement'
	| 'SVGTSpanElement'
	| 'SVGUseElement'
	| 'SVGViewElement'
	| 'Text...'
	| 'TouchList...'
	| 'WebGLRenderingContext...'
	| 'WebGL2RenderingContext...'

export type IEventCallbackFieldDefinition = IFieldDefinition<
	(e?: any) => void
> & {
	type: FieldType.EventCallback
	options: {
		event: IEventCallbackName
		element: IEventCallbackParams
	}
}

export default class EventCallbackField extends AbstractField<
	IEventCallbackFieldDefinition
> {
	public static get description() {
		return 'A universal event handler'
	}
	public static templateDetails(
		options: IFieldTemplateDetailOptions<IEventCallbackFieldDefinition>
	) {
		const {
			definition: {
				options: { event, element }
			}
		} = options

		return {
			valueType: `((e: ${!event ? 'Partial' : event.replace('<...>', '')}<${
				!element ? 'any' : element.replace(/\.\.\./g, '')
			}>) => void)${options.definition.isArray ? '[]' : ''}`
		}
	}
}
