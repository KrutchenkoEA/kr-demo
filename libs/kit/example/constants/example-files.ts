/** Don't edit this file! It has been generated automatically. */

export const EXAMPLE_FILES = {
	'/chart-simple-bar/chart-simple-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(93, 212, 37, 0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'/chart-simple-bar/chart-simple-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
}
`,	'/chart-simple-bar/chart-simple-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartBarEnumMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый график */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-simple-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-simple-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-simple-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSimpleBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartBarEnumMock1;
}
`,
	'index.ts/tabs-simple-example/lorem.ts': `<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> russian = <span class="hljs-string">&#39;
  Нефть – это жидкая природная смесь разнообразных углеводородов с
  небольшим количеством других органических соединений; ценное
  полезное ископаемое, залегающее часто вместе с газообразными
  углеводородами; маслянистая горючая жидкость, обладающая
  специфическим запахом, обычно коричневого цвета с зеленоватым или
  другим оттенком, иногда почти черная, очень редко бесцветная&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> english = <span class="hljs-string">&#39;
  Oil is a liquid natural mixture of various hydrocarbons with little the
  amount of other organic compounds; valuable mineral, often occurring
  together with gaseous hydrocarbons; oily flammable liquid with a specific
  odor, usually brown colors with a greenish or other tinge, sometimes
  almost black, very rarely colorless&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> french = <span class="hljs-string">&#39;
  Le pétrole est un mélange naturel liquide de divers hydrocarbures avec peu
  de la quantité d&#x27;autres composés organiques ; minéral précieux, se
  produisant souvent avec des hydrocarbures gazeux; huileux liquide
  inflammable avec une odeur spécifique, généralement brun couleurs avec une
  teinte verdâtre ou autre, parfois presque noire, très rarement incolore&#39;</span>;
`,	'index.ts/tabs-simple-example/tabs-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Russian&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-tab-content&quot;</span>&gt;</span>{{ russian }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;English&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-tab-content&quot;</span>&gt;</span>{{ english }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;French&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-tab-content&quot;</span>&gt;</span>{{ french }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-tabs</span>&gt;</span>
`,	'index.ts/tabs-simple-example/tabs-simple-example.scss': `<span class="hljs-selector-class">.example-tab-content</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">8px</span> <span class="hljs-number">0</span>;
  <span class="hljs-selector-tag">text</span>-align: justify;
}
`,	'index.ts/tabs-simple-example/tabs-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">import</span> { french, english, russian } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./lorem&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;tabs-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./tabs-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./tabs-simple-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsSimpleExample</span> {
  <span class="hljs-keyword">readonly</span> russian = russian;
  <span class="hljs-keyword">readonly</span> english = english;
  <span class="hljs-keyword">readonly</span> french = french;
}
`,
	'index.ts/toggle-simple-example/toggle-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
`,	'index.ts/toggle-simple-example/toggle-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;toggle-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./toggle-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToggleSimpleExample</span> {}
`,
	'index.ts/toggle-size-example/toggle-size-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-sm-toggle&quot;</span>&gt;</span>sm<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-sm-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-md-toggle&quot;</span>&gt;</span>md<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-md-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-lg-toggle&quot;</span>&gt;</span>lg<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-lg-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-xlg-toggle&quot;</span>&gt;</span>xlg<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xlg&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-xlg-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
`,	'index.ts/toggle-size-example/toggle-size-example.scss': `<span class="hljs-selector-tag">label</span> {
  <span class="hljs-attribute">display</span>: block;
}

tlui-toggle {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">8px</span>;
}
`,	'index.ts/toggle-size-example/toggle-size-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Размеры */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;toggle-size-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./toggle-size-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./toggle-size-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToggleSizeExample</span> {}
`
};