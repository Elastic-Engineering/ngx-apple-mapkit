import {
	DoCheck,
	ElementRef,
	EventEmitter,
	KeyValueDiffers,
	OnDestroy,
	OnInit,
	Renderer2,
} from "@angular/core";
import { AnnotationConstructorOptionsInterface } from "../../declarations";
import { AppleMapsService } from "../../apple-maps.service";
import { AppleMapkitComponent } from "../../apple-mapkit.component";
import * as i0 from "@angular/core";
export declare class AppleMapkitAnnotationComponent
	implements OnInit, DoCheck, OnDestroy
{
	private appleMapsService;
	private differs;
	private ref;
	private renderer;
	private parent;
	options: AnnotationConstructorOptionsInterface;
	onSelect: EventEmitter<any>;
	onDeselect: EventEmitter<any>;
	set latitude(value: number);
	get latitude(): number;
	set longitude(value: number);
	get longitude(): number;
	private _latitude;
	private _longitude;
	private _options;
	private annotation;
	private landmarkAnnotationCallout;
	private annotationElement;
	private calloutEnabled;
	private parentKey;
	constructor(
		appleMapsService: AppleMapsService,
		differs: KeyValueDiffers,
		ref: ElementRef,
		renderer: Renderer2,
		parent: AppleMapkitComponent
	);
	ngOnInit(): void;
	private initAnnotation;
	private transformOption;
	private transformOptions;
	private createAnnotation;
	private calloutForLandmarkAnnotation;
	ngDoCheck(): void;
	private optionsChanged;
	ngOnDestroy(): void;
	static ɵfac: i0.ɵɵFactoryDeclaration<AppleMapkitAnnotationComponent, never>;
	static ɵcmp: i0.ɵɵComponentDeclaration<
		AppleMapkitAnnotationComponent,
		"ngx-apple-mapkit-annotation",
		never,
		{
			options: { alias: "options"; required: true };
			latitude: { alias: "latitude"; required: true };
			longitude: { alias: "longitude"; required: true };
		},
		{ onSelect: "onSelect"; onDeselect: "onDeselect" },
		never,
		["*"],
		false,
		never
	>;
}