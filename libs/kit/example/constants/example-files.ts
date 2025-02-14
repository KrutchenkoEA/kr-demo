/** Don't edit this file! It has been generated automatically. */

export const EXAMPLE_FILES = {
	'accordion/accordion-simple-example/accordion-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-accordion</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span>
    [<span class="hljs-attr">kruiAccordionItemExpanded</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">kruiAccordionItem</span>]=<span class="hljs-string">&quot;&#x27;Инфо 1&#x27;&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-content&quot;</span>&gt;</span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ipsam?
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> [<span class="hljs-attr">kruiAccordionItemRightIconText</span>]=<span class="hljs-string">&quot;1&quot;</span>
               [<span class="hljs-attr">kruiAccordionItemRightIcon</span>]=<span class="hljs-string">&quot;&#x27;kruiIconAlertAlarm&#x27;&quot;</span>
               [<span class="hljs-attr">kruiAccordionItem</span>]=<span class="hljs-string">&quot;&#x27;Инфо 2&#x27;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-content&quot;</span>&gt;</span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius fuga iste iure nulla omnis reprehenderit sequi
      soluta ut! Consequuntur, error?
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> [<span class="hljs-attr">kruiAccordionItem</span>]=<span class="hljs-string">&quot;&#x27;Инфо 3&#x27;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-content&quot;</span>&gt;</span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque aut beatae, culpa debitis deleniti distinctio
      dolorum enim eos esse eum eveniet facere facilis in ipsam itaque laborum libero modi obcaecati pariatur placeat
      quaerat quas, quia quo ratione repudiandae rerum, sapiente similique tempore vero! Corporis, debitis, porro? Alias
      atque iusto magnam! Amet blanditiis consequuntur ex fuga ipsum laborum maiores maxime minus modi necessitatibus,
      nobis quaerat quam quas quisquam repudiandae sequi sit tempora temporibus velit voluptate? Ab aliquam aut autem
      commodi cupiditate eos eum eveniet fugiat ipsa magnam molestiae natus nisi, perspiciatis quia quis quisquam
      ratione recusandae reiciendis reprehenderit rerum? Perferendis!
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-accordion</span>&gt;</span>
`,	'accordion/accordion-simple-example/accordion-simple-example.scss': `tlui-accordion {
  <span class="hljs-attribute">max-width</span>: <span class="hljs-number">450px</span>;
}

<span class="hljs-selector-class">.example-content</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">8px</span>;
}
`,	'accordion/accordion-simple-example/accordion-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;accordion-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./accordion-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./accordion-simple-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionSimpleExample</span> {}
`,
	'area-charts/chart-enum-area/chart-enum-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;false&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;enum&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-2)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-2)&#x27;, &#x27;var(--color-additional-12)&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'area-charts/chart-enum-area/chart-enum-area.component.scss': ``,	'area-charts/chart-enum-area/chart-enum-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartLineEnumMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Enum */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-enum-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-enum-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-enum-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartEnumAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartLineEnumMock1;
}
`,
	'area-charts/chart-layer-area/chart-layer-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;default&#x27;&quot;</span> [<span class="hljs-attr">legend</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data2&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>

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
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'area-charts/chart-layer-area/chart-layer-area.component.scss': ``,	'area-charts/chart-layer-area/chart-layer-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartNumberMock3 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Слои */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-layer-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-layer-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-layer-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartLayerAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock3;
}
`,
	'area-charts/chart-legend-area/chart-legend-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendPosition</span>]=<span class="hljs-string">&quot;&#x27;top&#x27;&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;custom&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;false&quot;</span> [<span class="hljs-attr">tooltipComponentType</span>]=<span class="hljs-string">&quot;&#x27;custom&#x27;&quot;</span> [<span class="hljs-attr">tooltipComponent</span>]=<span class="hljs-string">&quot;tooltipComponent&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-legend-directive</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend&quot;</span>&gt;</span>
    @for (layer of chart?.legendGroups; track layer.layerId; let layerIndex = $index) {
      @for (label of layer.dataLayer; track label.layer.id) {
        @for (lab of label.data; track lab.title; let trendIndex = $index) {
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend__item&quot;</span>
               (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;chart?.onTrendInactivityChange(lab.type, label.layer, layer.layerId, layerIndex, trendIndex, lab.disabled = !lab.disabled)&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">style.background-color</span>]=<span class="hljs-string">&quot;lab.color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend__icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend__title&quot;</span>&gt;</span>{{ lab.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        }
      }
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-legend-directive</span>&gt;</span>

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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-7)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{ top: 15, right: 10, left: 10, bottom: 0 }&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'area-charts/chart-legend-area/chart-legend-area.component.scss': `tlui-<span class="hljs-selector-tag">line</span>-chart {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span> <span class="hljs-number">0</span>;
}


<span class="hljs-selector-class">.custom-legend</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: row;
  <span class="hljs-attribute">justify-content</span>: flex-end;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">order</span>: <span class="hljs-number">1</span>;

  &amp;__item {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: row;
    <span class="hljs-attribute">justify-content</span>: center;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">cursor</span>: pointer;

    &amp;<span class="hljs-selector-pseudo">:hover</span> {
      <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
    }
  }

  &amp;__icon {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">18px</span>;
  }

  &amp;__title {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  }
}
`,	'area-charts/chart-legend-area/chart-legend-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ViewChild</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartComponent</span>, kruiChartNumberMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CustomAreaTooltipComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/kit/pages/area-charts/examples&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Легенда */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-legend-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-legend-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-legend-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartLegendAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-title class_">KruiChartComponent</span>) <span class="hljs-keyword">public</span> <span class="hljs-attr">chart</span>: <span class="hljs-title class_">KruiChartComponent</span> | <span class="hljs-literal">undefined</span>;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> tooltipComponent = <span class="hljs-title class_">CustomAreaTooltipComponent</span>;
}
`,	'area-charts/chart-legend-area/tooltip.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
  @for (group of data; track group.title) {
    @for (row of group.rows; track row.title) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__item&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">style.background-color</span>]=<span class="hljs-string">&quot;row.color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__marker&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__value&quot;</span>&gt;</span>{{ row.value }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__label&quot;</span>&gt;</span>{{ row.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'area-charts/chart-legend-area/tooltip.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.tooltip</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--color-background-popup-widgets);
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;

  &amp;__item {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: row;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
  }

  &amp;__marker {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  }

  &amp;__value {
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
  }

  &amp;__label {
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-signatures-and-future);
  }
}
`,	'area-charts/chart-legend-area/tooltip.component.ts': `<span class="hljs-keyword">import</span> { animate, state, style, transition, trigger } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/animations&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartTooltipBaseDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;


<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;krui-area-tooltip-custom&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./tooltip.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./tooltip.component.scss&#x27;</span>],
  <span class="hljs-attr">animations</span>: [
    <span class="hljs-title function_">trigger</span>(<span class="hljs-string">&#x27;popup&#x27;</span>, [
      <span class="hljs-title function_">state</span>(<span class="hljs-string">&#x27;void&#x27;</span>, <span class="hljs-title function_">style</span>({ <span class="hljs-attr">opacity</span>: <span class="hljs-number">0</span> })),
      <span class="hljs-title function_">state</span>(<span class="hljs-string">&#x27;enter&#x27;</span>, <span class="hljs-title function_">style</span>({ <span class="hljs-attr">opacity</span>: <span class="hljs-number">1</span> })),
      <span class="hljs-title function_">transition</span>(<span class="hljs-string">&#x27;* =&gt; *&#x27;</span>, <span class="hljs-title function_">animate</span>(<span class="hljs-string">&#x27;200ms cubic-bezier(0.25, 0.8, 0.25, 1)&#x27;</span>)),
    ]),
  ],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomAreaTooltipComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">KruiChartTooltipBaseDirective</span> {
}
`,
	'area-charts/chart-point-area/chart-point-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'area-charts/chart-point-area/chart-point-area.component.scss': ``,	'area-charts/chart-point-area/chart-point-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMockMissingValue1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Пропущенные значения */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-point-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-point-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-point-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartPointAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMockMissingValue1;
}
`,
	'area-charts/chart-simple-area/chart-simple-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(37,72,212, 0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(37,72,212)&#x27;, &#x27;rgba(37,72,212, 0.5)&#x27;, &#x27;rgba(37,72,212, 0)&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgb(212,57,37)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(212,57,37)&#x27;, &#x27;rgba(37,81,212,0.1)&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data2&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'area-charts/chart-simple-area/chart-simple-area.component.scss': ``,	'area-charts/chart-simple-area/chart-simple-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartNumberMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-simple-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-simple-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-simple-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSimpleAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock2;
}
`,
	'area-charts/chart-time-area/chart-time-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-12)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-12)&#x27;, &#x27;var(--color-additional-13)&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'area-charts/chart-time-area/chart-time-area.component.scss': ``,	'area-charts/chart-time-area/chart-time-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartLineMockTime1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Временной */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-time-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-time-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-time-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartTimeAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartLineMockTime1;
}
`,
	'area-charts/chart-update-area/chart-update-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-8)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-7)&#x27;, &#x27;var(--color-additional-9)&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'area-charts/chart-update-area/chart-update-area.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">640px</span>;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}
`,	'area-charts/chart-update-area/chart-update-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRdmNumberData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-update-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-update-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-update-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartUpdateAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">20</span>);

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">20</span>);
  }
}
`,
	'area-charts/chart-zoom-area/chart-zoom-area.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;&#x27;brush&#x27;&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-index-blue)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-index-blue)&#x27;, &#x27;var(--color-index-green)&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;&#x27;area&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'area-charts/chart-zoom-area/chart-zoom-area.component.scss': ``,	'area-charts/chart-zoom-area/chart-zoom-area.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Zoom */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-zoom-area&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-zoom-area.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-zoom-area.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartZoomAreaComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock4;
}
`,
	'bar-charts/chart-animation-bar/chart-animation-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream0&quot;</span>
      [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;durationAnimation1&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream1&quot;</span>
      [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;durationAnimation2&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;settings&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span>Длина анимации первой линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
      [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;durationAnimation1&quot;</span>
      [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1000&quot;</span>
      [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;200&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span>Длина анимации второй линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
      [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;durationAnimation2&quot;</span>
      [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1000&quot;</span>
      [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;200&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span> <span class="hljs-attr">kruiBtnIcon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'bar-charts/chart-animation-bar/chart-animation-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}

<span class="hljs-selector-class">.settings</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: auto auto auto;
  <span class="hljs-attribute">grid-column</span>-<span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">20px</span>;

  <span class="hljs-selector-class">.item</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: column;
  }
}
`,	'bar-charts/chart-animation-bar/chart-animation-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">KruiChartBarInputData</span>,
  kruiChartNumberMock1,
  kruiChartNumberMock2,
  kruiChartRdmNumberData,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Анимация */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-animation-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-animation-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-animation-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartAnimationBarComponent</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream0</span>: <span class="hljs-title class_">KruiChartBarInputData</span>[] = kruiChartNumberMock2;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream1</span>: <span class="hljs-title class_">KruiChartBarInputData</span>[] = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">durationAnimation1</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">2000</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">durationAnimation2</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">3000</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">stream1</span> = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">stream0</span> = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>);
  }
}
`,
	'bar-charts/chart-enum-bar/chart-enum-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">borderColor</span>]=<span class="hljs-string">&quot;&#x27;transparent&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;false&quot;</span>
            [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;false&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;false&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span> [<span class="hljs-attr">layerTitle</span>]=<span class="hljs-string">&quot;&#x27;Группа 1&#x27;&quot;</span> [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;false&quot;</span> [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;enum&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;&#x27;growth&#x27;&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;6&quot;</span>
      [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;80&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Факт&#x27;]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(114, 118, 137, 1)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;&#x27;growth&#x27;&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;6&quot;</span>
      [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;80&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;План&#x27;]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgb(36,84,13)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data2&quot;</span>
      [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'bar-charts/chart-enum-bar/chart-enum-bar.component.scss': `tlui-<span class="hljs-selector-tag">line</span>-chart {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">10px</span>;
}
`,	'bar-charts/chart-enum-bar/chart-enum-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartBarInputData</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Enum */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-enum-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-enum-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-enum-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartEnumBarComponent</span> {
  <span class="hljs-keyword">public</span> data = [
    [<span class="hljs-number">1</span>, <span class="hljs-number">8065.4</span>, <span class="hljs-string">&#x27;02.03-08.03&#x27;</span>],
    [<span class="hljs-number">2</span>, <span class="hljs-number">8564.5</span>, <span class="hljs-string">&#x27;09.03-15.03&#x27;</span>],
    [<span class="hljs-number">3</span>, <span class="hljs-number">8792.0</span>, <span class="hljs-string">&#x27;16.03-22.03&#x27;</span>],
    [<span class="hljs-number">4</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&#x27;22.03-23.03&#x27;</span>],
  ] <span class="hljs-keyword">as</span> <span class="hljs-title class_">KruiChartBarInputData</span>[];

  <span class="hljs-keyword">public</span> data2 = [
    [<span class="hljs-number">1</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&#x27;02.03-08.03&#x27;</span>],
    [<span class="hljs-number">2</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&#x27;09.03-15.03&#x27;</span>],
    [<span class="hljs-number">3</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&#x27;16.03-22.03&#x27;</span>],
    [<span class="hljs-number">4</span>, <span class="hljs-number">8787.4</span>, <span class="hljs-string">&#x27;22.03-23.03&#x27;</span>],
  ] <span class="hljs-keyword">as</span> <span class="hljs-title class_">KruiChartBarInputData</span>[];
}
`,
	'bar-charts/chart-layer-bar/chart-layer-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;default&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;8&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;8&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;8&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;6&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(45,77,237,0.3)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data2&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'bar-charts/chart-layer-bar/chart-layer-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
}
`,	'bar-charts/chart-layer-bar/chart-layer-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock3, kruiChartNumberMock4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Слои */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-layer-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-layer-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-layer-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartLayerBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock3;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock4;
}
`,
	'bar-charts/chart-setting-bar/chart-setting-bar.component.html': `@if ((options | async); as chartOptions) {
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span>
    [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
    [<span class="hljs-attr">setDefIfContainerSizeInvalid</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">bgColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.bgColor&quot;</span>
    [<span class="hljs-attr">borderColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderColor&quot;</span>
    [<span class="hljs-attr">borderRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderRadius&quot;</span>
    [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.chartOrientation&quot;</span>
    [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendAxis&quot;</span>
    [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendLayer&quot;</span>
    [<span class="hljs-attr">legendPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendPosition&quot;</span>
    [<span class="hljs-attr">legendTrend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendTrend&quot;</span>
    [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendType&quot;</span>
    [<span class="hljs-attr">legend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legend&quot;</span>
    [<span class="hljs-attr">marginBottom</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginBottom&quot;</span>
    [<span class="hljs-attr">marginLeft</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginLeft&quot;</span>
    [<span class="hljs-attr">marginRight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginRight&quot;</span>
    [<span class="hljs-attr">marginTop</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginTop&quot;</span>
    [<span class="hljs-attr">resizeObserveType</span>]=<span class="hljs-string">&quot;chartOptions.view?.resizeObserveType&quot;</span>
    [<span class="hljs-attr">smartScrollEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollEnable&quot;</span>
    [<span class="hljs-attr">smartScrollHeight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollHeight&quot;</span>
    [<span class="hljs-attr">toolbarJustifyContent</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarJustifyContent&quot;</span>
    [<span class="hljs-attr">toolbarPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarPosition&quot;</span>
    [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbar&quot;</span>
    [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipColor&quot;</span>
    [<span class="hljs-attr">tooltipMarkerCrossSize</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerCrossSize&quot;</span>
    [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerType&quot;</span>
    [<span class="hljs-attr">tooltipShowMilliseconds</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipShowMilliseconds&quot;</span>
    [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipType&quot;</span>
    [<span class="hljs-attr">tooltipWidth</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipWidth&quot;</span>
    [<span class="hljs-attr">tooltip</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltip&quot;</span>
    [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;chartOptions.view?.zoomType&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>
      [<span class="hljs-attr">layerTitle</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.layerTitle&quot;</span>
      [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipColor&quot;</span>
      [<span class="hljs-attr">tooltipEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipEnable&quot;</span>
      [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomPrimaryEnable&quot;</span>
      [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomSecondaryEnable&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>


      @if (isChartHorizontal.value) {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config.color&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[chartOptions.view?.barLayer?.config.color, &#x27;#fff&#x27;]&quot;</span>
          [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barBorderColor&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartHorizontalBar</span>
        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      } @else {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config.color&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[chartOptions.view?.barLayer?.config.color, &#x27;#fff&#x27;]&quot;</span>
          [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barBorderColor&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.barLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartBar</span>
        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
}

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__chart-toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Вертикальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span>
      [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;isChartHorizontal&quot;</span>
      [<span class="hljs-attr">iconOff</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartGantt&#x27;&quot;</span>
      [<span class="hljs-attr">iconOn</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartColumns&#x27;&quot;</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Горизонтальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">krui-accordion</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;optionsForm&quot;</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__accordion&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;График&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;bgColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;borderColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Смарт-скролл
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет смарт-скролла<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Тоолтип&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Тултип<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipShowMilliseconds&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать миллисекунды<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;fullLine&#x27;, &#x27;dataPoint&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Маркер тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;line&#x27;, &#x27;horizontal-line&#x27;, &#x27;smallCross&#x27;, &#x27;fullscreenCross&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет маркера<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          [<span class="hljs-attr">class.krui-disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.tooltip.controls.tooltipMarkerType.value !== &#x27;smallCross&#x27;&quot;</span>
          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>
        &gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер маркера<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerCrossSize&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Толщина линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipWidth&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Панель управления&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;toolbar&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbar&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Панель управления<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarPosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Выравнивание<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarJustifyContent&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span>
                *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;
                  let option of [&#x27;center&#x27;, &#x27;flex-start&#x27;, &#x27;flex-end&#x27;, &#x27;space-between&#x27;, &#x27;space-around&#x27;, &#x27;space-evenly&#x27;]
                &quot;</span>
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Легенда&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;legend&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Легенда<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendLayer&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки слоя
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendAxis&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки осей
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendTrend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки трендов и столбцов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Эффект подстветки трендов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип легенды<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;default&#x27;, &#x27;simple-style&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendPosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Зум&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;layer&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomPrimaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси х<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomSecondaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси y<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип зума<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;none&#x27;, &#x27;brush&#x27;, &#x27;scroll&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Х&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси х<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Y&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси у<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;left&#x27;, &#x27;right&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;barLayer&quot;</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Столбец&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;config&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Обводка<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barBorderColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип анимации<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animationType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;growth&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Заливка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;gradient&#x27;, &#x27;solidColor&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Ширина столбца, %<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barWidthPercent&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Скругление столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barRadius&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barBorder&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Обводка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Прозрачность<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;0.1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barOpacity&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Эффект наведения курсора<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет эффекта наведения<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Положение значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuePosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;over&#x27;, &#x27;top&#x27;, &#x27;center&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showEnumValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать расчетные значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;startInNull&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Начинать с нуля<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;common&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать значения столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер значений точек, пх<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;18&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuesFontSizePx&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animation&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать анимацию<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации отрисовки<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации переключения<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationToggleAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenDataChange&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при изменение значений
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenLegendClick&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при клике на легенду
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'bar-charts/chart-setting-bar/chart-setting-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}


<span class="hljs-selector-class">.button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
}

<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">box-sizing</span>: border-box;

  &amp;__chart-toggle {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span>;

    <span class="hljs-selector-tag">label</span> {
      <span class="hljs-attribute">font-size</span>: <span class="hljs-number">11px</span>;
    }
  }

  &amp;__accordion {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;

    <span class="hljs-selector-class">.tab-content</span> {
      <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;
      <span class="hljs-attribute">box-sizing</span>: border-box;
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">flex-direction</span>: column;
      <span class="hljs-attribute">gap</span>: <span class="hljs-number">5px</span>;

      &amp;__item {
        <span class="hljs-attribute">display</span>: flex;
        <span class="hljs-attribute">gap</span>: <span class="hljs-number">15px</span>;
        <span class="hljs-attribute">align-items</span>: center;
        <span class="hljs-attribute">justify-content</span>: space-between;

        <span class="hljs-selector-class">.color-select</span> {
          <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
        }
      }
    }

    hr<span class="hljs-selector-class">.tab-delimeter</span> {
      <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">96%</span>;
    }
  }

}
`,	'bar-charts/chart-setting-bar/chart-setting-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">Inject</span>, <span class="hljs-title class_">OnDestroy</span>, <span class="hljs-title class_">OnInit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Subscription</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;
<span class="hljs-keyword">import</span> { debounceTime } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs/operators&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>,
  <span class="hljs-title class_">IKruiOptionsFormType</span>,
  <span class="hljs-variable constant_">KRUI_CHART_FORM_CREATE_SERVICE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>,
  <span class="hljs-title class_">KruiChartFormCreateService</span>,
  kruiChartRandomDateArray,
  kruiChartRdmNumberData,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Настройки */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-setting-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-setting-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-setting-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSettingBarComponent</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">OnInit</span>, <span class="hljs-title class_">OnDestroy</span> {
  <span class="hljs-keyword">public</span> interpolation = <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>;
  <span class="hljs-keyword">public</span> markers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>;
  <span class="hljs-keyword">public</span> dataMarkers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">optionsForm</span>: <span class="hljs-title class_">IKruiOptionsFormType</span>;
  <span class="hljs-keyword">public</span> isChartHorizontal = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">public</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">BehaviorSubject</span>&lt;{
    <span class="hljs-attr">data</span>: [<span class="hljs-built_in">any</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][]; <span class="hljs-attr">view</span>: <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>;
  }&gt; | <span class="hljs-literal">undefined</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">subscription</span>: <span class="hljs-title class_">Subscription</span>[] = [];

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-meta">@Inject</span>(KRUI_CHART_FORM_CREATE_SERVICE) <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">formCreateService</span>: <span class="hljs-title class_">KruiChartFormCreateService</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">formCreateService</span>.<span class="hljs-title function_">createSettingFormDefault</span>();
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnInit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>(
      { <span class="hljs-attr">data</span>: <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>), <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>() },
    );
    <span class="hljs-keyword">const</span> sub1 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">update</span>());

    <span class="hljs-keyword">const</span> sub2 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">isChartHorizontal</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (v) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;horizontal&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;horizontal-line&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;vertical&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;line&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;time&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      }
    });

    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span> = [sub1, sub2];
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnDestroy</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">sub</span> =&gt;</span> sub.<span class="hljs-title function_">unsubscribe</span>());
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// @ts-ignore</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>({
      <span class="hljs-attr">data</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>().<span class="hljs-property">axisX</span>.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;number&#x27;</span> ?
        <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>) :
        <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>),
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    }));
  }
}
`,
	'bar-charts/chart-simple-bar/chart-simple-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;&#x27;rgb(237,80,45)&#x27;&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(237,151,45,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;top&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'bar-charts/chart-simple-bar/chart-simple-bar.component.scss': ``,	'bar-charts/chart-simple-bar/chart-simple-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartBarEnumMock1, kruiChartNumberMockMissingValue1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-simple-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-simple-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-simple-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSimpleBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMockMissingValue1;
}
`,
	'bar-charts/chart-simple-horizontal-bar/chart-simple-horizontal-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span> [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;&#x27;rgb(45,237,234)&#x27;&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;2022&#x27;]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(45,221,237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'bar-charts/chart-simple-horizontal-bar/chart-simple-horizontal-bar.component.scss': ``,	'bar-charts/chart-simple-horizontal-bar/chart-simple-horizontal-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Горизонтальный */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-simple-horizontal-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-simple-horizontal-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-simple-horizontal-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSimpleHorizontalBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock2;
}
`,
	'bar-charts/chart-time-bar/chart-time-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
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
      [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;&#x27;rgb(237,45,45)&#x27;&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;9&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(237,45,87,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'bar-charts/chart-time-bar/chart-time-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
}
`,	'bar-charts/chart-time-bar/chart-time-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRandomDateArray } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Временной */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-time-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-time-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-time-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartTimeBarComponent</span> {
  <span class="hljs-keyword">public</span> data = <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>);
}
`,
	'bar-charts/chart-tooltip-horizontal-bar/chart-tooltip-horizontal-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipComponentType</span>]=<span class="hljs-string">&quot;&#x27;custom&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipComponent</span>]=<span class="hljs-string">&quot;tooltipComponent&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span> [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;&#x27;rgb(237,237,45)&#x27;&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;2022&#x27;]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(237,202,45,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'bar-charts/chart-tooltip-horizontal-bar/chart-tooltip-horizontal-bar.component.scss': ``,	'bar-charts/chart-tooltip-horizontal-bar/chart-tooltip-horizontal-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CustomBarTooltipComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./tooltip.component&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Кастомный тултип */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-tooltip-horizontal-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-tooltip-horizontal-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-tooltip-horizontal-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartTooltipHorizontalBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock2;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> tooltipComponent = <span class="hljs-title class_">CustomBarTooltipComponent</span>;
}
`,	'bar-charts/chart-tooltip-horizontal-bar/tooltip.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
  @for (group of data; track group.title) {
    @for (row of group.rows; track row.title) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__item&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">style.background-color</span>]=<span class="hljs-string">&quot;row.color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__marker&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__value&quot;</span>&gt;</span>{{ row.value }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__label&quot;</span>&gt;</span>{{ row.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'bar-charts/chart-tooltip-horizontal-bar/tooltip.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.tooltip</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--color-background-body);
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-stroke);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;

  &amp;__item {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: row;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
  }

  &amp;__marker {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">1px</span>;
  }

  &amp;__value {
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
  }

  &amp;__label {
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-main);
  }
}
`,	'bar-charts/chart-tooltip-horizontal-bar/tooltip.component.ts': `<span class="hljs-keyword">import</span> { animate, state, style, transition, trigger } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/animations&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartTooltipBaseDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;


<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;tlui-bar-tooltip-custom&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./tooltip.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./tooltip.component.scss&#x27;</span>],
  <span class="hljs-attr">animations</span>: [
    <span class="hljs-title function_">trigger</span>(<span class="hljs-string">&#x27;popup&#x27;</span>, [
      <span class="hljs-title function_">state</span>(<span class="hljs-string">&#x27;void&#x27;</span>, <span class="hljs-title function_">style</span>({ <span class="hljs-attr">opacity</span>: <span class="hljs-number">0</span> })),
      <span class="hljs-title function_">state</span>(<span class="hljs-string">&#x27;enter&#x27;</span>, <span class="hljs-title function_">style</span>({ <span class="hljs-attr">opacity</span>: <span class="hljs-number">1</span> })),
      <span class="hljs-title function_">transition</span>(<span class="hljs-string">&#x27;* =&gt; *&#x27;</span>, <span class="hljs-title function_">animate</span>(<span class="hljs-string">&#x27;200ms cubic-bezier(0.25, 0.8, 0.25, 1)&#x27;</span>)),
    ]),
  ],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomBarTooltipComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">KruiChartTooltipBaseDirective</span> {
}
`,
	'bar-charts/chart-update-bar/chart-update-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;&#x27;rgb(96,45,237)&#x27;&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(74,45,237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'bar-charts/chart-update-bar/chart-update-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">640px</span>;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}
`,	'bar-charts/chart-update-bar/chart-update-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartRandomValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-update-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-update-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-update-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartUpdateBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)]];
  }
}
`,
	'bar-charts/chart-update-horizontal-bar/chart-update-horizontal-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span> [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;&#x27;rgb(131,237,45)&#x27;&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;2022&#x27;]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(173,237,45,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'bar-charts/chart-update-horizontal-bar/chart-update-horizontal-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">640px</span>;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}
`,	'bar-charts/chart-update-horizontal-bar/chart-update-horizontal-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartRandomValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-update-horizontal-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-update-horizontal-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-update-horizontal-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartUpdateHorizontalBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)]];
  }
}
`,
	'bar-charts/chart-zoom-bar/chart-zoom-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;false&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>
            [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;&#x27;brush&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorderColor</span>]=<span class="hljs-string">&quot;&#x27;rgb(48,237,45)&#x27;&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(218,45,237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;top&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'bar-charts/chart-zoom-bar/chart-zoom-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
}
`,	'bar-charts/chart-zoom-bar/chart-zoom-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartBarEnumMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Zoom */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-zoom-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-zoom-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-zoom-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartZoomBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartBarEnumMock1;
}
`,
	'button/button-icon-example/button-icon-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>Без иконки<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
  Справа
  <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconMenuBurgerBig&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconCalendar&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  Слева
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconCalendar&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  Обе
  <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconMenuBurgerBig&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconCalendar&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-button-group</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">&quot;tertiary&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>Без иконки<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    Справа
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconMenuBurgerBig&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconCalendar&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
    Слева
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconCalendar&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
    Обе
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconMenuBurgerBig&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconCalendar&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-button-group</span>&gt;</span>
`,	'button/button-icon-example/button-icon-example.scss': `<span class="hljs-selector-tag">button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">8px</span>;
}
`,	'button/button-icon-example/button-icon-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Иконки */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;button-icon-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./button-icon-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./button-icon-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonIconExample</span> {
}
`,
	'button/button-size-example/button-size-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xlg&quot;</span>&gt;</span>Extra large<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Middle<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
`,	'button/button-size-example/button-size-example.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: flex-start;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}

<span class="hljs-selector-tag">button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">8px</span>;
}
`,	'button/button-size-example/button-size-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Размер */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;button-size-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./button-size-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./button-size-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonSizeExample</span> {
}
`,
	'button/button-style-example/button-style-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Secondary<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>Ghost<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">&quot;tertiary&quot;</span>&gt;</span>Tertiary<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
`,	'button/button-style-example/button-style-example.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: flex-start;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}


<span class="hljs-selector-tag">button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">8px</span>;
}
`,	'button/button-style-example/button-style-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Стиль */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;button-style-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./button-style-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./button-style-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonStyleExample</span> {
}
`,
	'checkbox/checkbox-simple-example/checkbox-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>&gt;</span>С подписью<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
`,	'checkbox/checkbox-simple-example/checkbox-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;checkbox-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./checkbox-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckboxSimpleExample</span> {}
`,
	'combo-bar-charts/chart-combo-bar/chart-combo-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(45, 141, 237)&#x27;]&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022,2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(45, 141, 237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;darkkhaki&#x27;, &#x27;darkmagenta&#x27;, &#x27;darkolivegreen&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2, data3]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartComboBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'combo-bar-charts/chart-combo-bar/chart-combo-bar.component.scss': ``,	'combo-bar-charts/chart-combo-bar/chart-combo-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> {
  kruiChartNumberMock1,
  kruiChartNumberMock2,
  kruiChartNumberMock3,
  kruiChartNumberMock4,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-combo-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-combo-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-combo-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartComboBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock2;
  <span class="hljs-keyword">public</span> data3 = kruiChartNumberMock3;
  <span class="hljs-keyword">public</span> data4 = kruiChartNumberMock4;
}
`,
	'combo-bar-charts/chart-combo-horizontal-bar/chart-combo-horizontal-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;none&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span> [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(45,64,237)&#x27;]&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022,2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(7,125,237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2, data3]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalComboBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'combo-bar-charts/chart-combo-horizontal-bar/chart-combo-horizontal-bar.component.scss': ``,	'combo-bar-charts/chart-combo-horizontal-bar/chart-combo-horizontal-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { data, data2, data3, data4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./const&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Горизонтальный */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-combo-horizontal-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-combo-horizontal-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-combo-horizontal-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartComboHorizontalBarComponent</span> {
  <span class="hljs-keyword">public</span> data = data;
  <span class="hljs-keyword">public</span> data2 = data2;
  <span class="hljs-keyword">public</span> data3 = data3;
  <span class="hljs-keyword">public</span> data4 = data4;
}
`,	'combo-bar-charts/chart-combo-horizontal-bar/const.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartBarInputData</span>, <span class="hljs-title class_">KruiChartStackedBarInputData</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> data = [
  [<span class="hljs-number">1</span>, <span class="hljs-number">48</span>, <span class="hljs-string">&#x27;1&#x27;</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">44</span>, <span class="hljs-string">&#x27;2&#x27;</span>],
  [<span class="hljs-number">3</span>, <span class="hljs-number">40</span>, <span class="hljs-string">&#x27;3&#x27;</span>],
  [<span class="hljs-number">4</span>, <span class="hljs-number">39</span>, <span class="hljs-string">&#x27;4&#x27;</span>],
  [<span class="hljs-number">5</span>, <span class="hljs-number">35</span>, <span class="hljs-string">&#x27;5&#x27;</span>],
  [<span class="hljs-number">6</span>, <span class="hljs-number">34</span>, <span class="hljs-string">&#x27;6&#x27;</span>],
  [<span class="hljs-number">7</span>, <span class="hljs-number">33</span>, <span class="hljs-string">&#x27;7&#x27;</span>],
  [<span class="hljs-number">8</span>, <span class="hljs-number">37</span>, <span class="hljs-string">&#x27;8&#x27;</span>],
  [<span class="hljs-number">9</span>, <span class="hljs-number">38</span>, <span class="hljs-string">&#x27;9&#x27;</span>],
  [<span class="hljs-number">10</span>, <span class="hljs-number">43</span>, <span class="hljs-string">&#x27;10&#x27;</span>]
] <span class="hljs-keyword">as</span> <span class="hljs-title class_">KruiChartBarInputData</span>[];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> data2 = [
  [<span class="hljs-number">1</span>, <span class="hljs-number">22</span>, <span class="hljs-string">&#x27;1&#x27;</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">27</span>, <span class="hljs-string">&#x27;2&#x27;</span>],
  [<span class="hljs-number">3</span>, <span class="hljs-number">33</span>, <span class="hljs-string">&#x27;3&#x27;</span>],
  [<span class="hljs-number">4</span>, <span class="hljs-number">28</span>, <span class="hljs-string">&#x27;4&#x27;</span>],
  [<span class="hljs-number">5</span>, <span class="hljs-number">26</span>, <span class="hljs-string">&#x27;5&#x27;</span>],
  [<span class="hljs-number">6</span>, <span class="hljs-number">25</span>, <span class="hljs-string">&#x27;6&#x27;</span>],
  [<span class="hljs-number">7</span>, <span class="hljs-number">20</span>, <span class="hljs-string">&#x27;7&#x27;</span>],
  [<span class="hljs-number">8</span>, <span class="hljs-number">26</span>, <span class="hljs-string">&#x27;8&#x27;</span>],
  [<span class="hljs-number">9</span>, <span class="hljs-number">24</span>, <span class="hljs-string">&#x27;9&#x27;</span>],
  [<span class="hljs-number">10</span>, <span class="hljs-number">28</span>, <span class="hljs-string">&#x27;10&#x27;</span>]
] <span class="hljs-keyword">as</span> <span class="hljs-title class_">KruiChartBarInputData</span>[];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> data3 = [
  [<span class="hljs-number">1</span>, <span class="hljs-number">34</span>, <span class="hljs-string">&#x27;1&#x27;</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">33</span>, <span class="hljs-string">&#x27;2&#x27;</span>],
  [<span class="hljs-number">3</span>, <span class="hljs-number">36</span>, <span class="hljs-string">&#x27;3&#x27;</span>],
  [<span class="hljs-number">4</span>, <span class="hljs-number">35</span>, <span class="hljs-string">&#x27;4&#x27;</span>],
  [<span class="hljs-number">5</span>, <span class="hljs-number">33</span>, <span class="hljs-string">&#x27;5&#x27;</span>],
  [<span class="hljs-number">6</span>, <span class="hljs-number">38</span>, <span class="hljs-string">&#x27;6&#x27;</span>],
  [<span class="hljs-number">7</span>, <span class="hljs-number">33</span>, <span class="hljs-string">&#x27;7&#x27;</span>],
  [<span class="hljs-number">8</span>, <span class="hljs-number">39</span>, <span class="hljs-string">&#x27;8&#x27;</span>],
  [<span class="hljs-number">9</span>, <span class="hljs-number">36</span>, <span class="hljs-string">&#x27;9&#x27;</span>],
  [<span class="hljs-number">10</span>, <span class="hljs-number">32</span>, <span class="hljs-string">&#x27;10&#x27;</span>]
] <span class="hljs-keyword">as</span> <span class="hljs-title class_">KruiChartBarInputData</span>[];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> data4 = [
  [<span class="hljs-number">1</span>, [<span class="hljs-number">48</span>, <span class="hljs-number">22</span>, <span class="hljs-number">34</span>], <span class="hljs-string">&#x27;1&#x27;</span>],
  [<span class="hljs-number">2</span>, [<span class="hljs-number">44</span>, <span class="hljs-number">27</span>, <span class="hljs-number">33</span>], <span class="hljs-string">&#x27;2&#x27;</span>],
  [<span class="hljs-number">3</span>, [<span class="hljs-number">40</span>, <span class="hljs-number">33</span>, <span class="hljs-number">36</span>], <span class="hljs-string">&#x27;3&#x27;</span>],
  [<span class="hljs-number">4</span>, [<span class="hljs-number">39</span>, <span class="hljs-number">28</span>, <span class="hljs-number">35</span>], <span class="hljs-string">&#x27;4&#x27;</span>],
  [<span class="hljs-number">5</span>, [<span class="hljs-number">35</span>, <span class="hljs-number">26</span>, <span class="hljs-number">33</span>], <span class="hljs-string">&#x27;5&#x27;</span>]
] <span class="hljs-keyword">as</span> <span class="hljs-title class_">KruiChartStackedBarInputData</span>[];
`,
	'combo-bar-charts/chart-enum-horizontal-combo-bar/chart-enum-horizontal-combo-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;false&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span> [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;enum&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;1&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2018,2020]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;top&#x27;&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 10,
        right: 15,
        bottom: 10,
        left: 0
      }&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalComboBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'combo-bar-charts/chart-enum-horizontal-combo-bar/chart-enum-horizontal-combo-bar.component.scss': ``,	'combo-bar-charts/chart-enum-horizontal-combo-bar/chart-enum-horizontal-combo-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartBarEnumMock1, kruiChartBarEnumMock3 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Enum */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-enum-horizontal-combo-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-enum-horizontal-combo-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-enum-horizontal-combo-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartEnumHorizontalComboBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartBarEnumMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartBarEnumMock3;
}
`,
	'combo-bar-charts/chart-setting-combo-bar/chart-setting-combo-bar.component.html': `@if ((options | async); as chartOptions) {
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span>
    [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
    [<span class="hljs-attr">setDefIfContainerSizeInvalid</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">bgColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.bgColor&quot;</span>
    [<span class="hljs-attr">borderColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderColor&quot;</span>
    [<span class="hljs-attr">borderRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderRadius&quot;</span>
    [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.chartOrientation&quot;</span>
    [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendAxis&quot;</span>
    [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendLayer&quot;</span>
    [<span class="hljs-attr">legendPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendPosition&quot;</span>
    [<span class="hljs-attr">legendTrend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendTrend&quot;</span>
    [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendType&quot;</span>
    [<span class="hljs-attr">legend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legend&quot;</span>
    [<span class="hljs-attr">marginBottom</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginBottom&quot;</span>
    [<span class="hljs-attr">marginLeft</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginLeft&quot;</span>
    [<span class="hljs-attr">marginRight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginRight&quot;</span>
    [<span class="hljs-attr">marginTop</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginTop&quot;</span>
    [<span class="hljs-attr">resizeObserveType</span>]=<span class="hljs-string">&quot;chartOptions.view?.resizeObserveType&quot;</span>
    [<span class="hljs-attr">smartScrollEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollEnable&quot;</span>
    [<span class="hljs-attr">smartScrollHeight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollHeight&quot;</span>
    [<span class="hljs-attr">toolbarJustifyContent</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarJustifyContent&quot;</span>
    [<span class="hljs-attr">toolbarPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarPosition&quot;</span>
    [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbar&quot;</span>
    [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipColor&quot;</span>
    [<span class="hljs-attr">tooltipMarkerCrossSize</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerCrossSize&quot;</span>
    [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerType&quot;</span>
    [<span class="hljs-attr">tooltipShowMilliseconds</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipShowMilliseconds&quot;</span>
    [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipType&quot;</span>
    [<span class="hljs-attr">tooltipWidth</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipWidth&quot;</span>
    [<span class="hljs-attr">tooltip</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltip&quot;</span>
    [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;chartOptions.view?.zoomType&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>
      [<span class="hljs-attr">layerTitle</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.layerTitle&quot;</span>
      [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipColor&quot;</span>
      [<span class="hljs-attr">tooltipEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipEnable&quot;</span>
      [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomPrimaryEnable&quot;</span>
      [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomSecondaryEnable&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>


      @if (isChartHorizontal.value) {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;, &#x27;Тестовый пример 2&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;bgColor&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[bgColor, bgColor2]&quot;</span>
          [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[brColor, brColor2]&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">stackWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.stackWidthPercent&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartHorizontalComboBar</span>
        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      } @else {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;, &#x27;Тестовый пример 2&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;bgColor&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[bgColor, bgColor2]&quot;</span>
          [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[brColor, brColor2]&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">stackWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.stackWidthPercent&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartComboBar</span>
        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
}

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__chart-toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Вертикальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span>
      [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;isChartHorizontal&quot;</span>
      [<span class="hljs-attr">iconOff</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartGantt&#x27;&quot;</span>
      [<span class="hljs-attr">iconOn</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartColumns&#x27;&quot;</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Горизонтальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__color-toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;bgColor&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;brColor&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;bgColor2&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;brColor2&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>


  <span class="hljs-tag">&lt;<span class="hljs-name">krui-accordion</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;optionsForm&quot;</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__accordion&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;График&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;bgColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;borderColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Смарт-скролл
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет смарт-скролла<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Тоолтип&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Тултип<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipShowMilliseconds&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать миллисекунды<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;fullLine&#x27;, &#x27;dataPoint&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Маркер тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;line&#x27;, &#x27;horizontal-line&#x27;, &#x27;smallCross&#x27;, &#x27;fullscreenCross&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет маркера<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          [<span class="hljs-attr">class.krui-disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.tooltip.controls.tooltipMarkerType.value !== &#x27;smallCross&#x27;&quot;</span>
          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>
        &gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер маркера<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerCrossSize&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Толщина линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipWidth&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Панель управления&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;toolbar&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbar&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Панель управления<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarPosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Выравнивание<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarJustifyContent&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span>
                *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;
                  let option of [&#x27;center&#x27;, &#x27;flex-start&#x27;, &#x27;flex-end&#x27;, &#x27;space-between&#x27;, &#x27;space-around&#x27;, &#x27;space-evenly&#x27;]
                &quot;</span>
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Легенда&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;legend&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Легенда<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendLayer&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки слоя
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendAxis&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки осей
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendTrend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки трендов и столбцов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Эффект подстветки трендов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип легенды<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;default&#x27;, &#x27;simple-style&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendPosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Зум&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;layer&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomPrimaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси х<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomSecondaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси y<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип зума<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;none&#x27;, &#x27;brush&#x27;, &#x27;scroll&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Х&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси х<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Y&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси у<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;left&#x27;, &#x27;right&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;comboBarLayer&quot;</span>
                 <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Комбинированный столбец&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;config&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип анимации<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animationType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;growth&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Заливка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;gradient&#x27;, &#x27;solidColor&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Ширина столбца, %<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barWidthPercent&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Ширина группы, %<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;stackWidthPercent&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Скругление столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barRadius&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barBorder&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Обводка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Прозрачность<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;0.1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barOpacity&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Эффект наведения курсора<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет эффекта наведения<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Положение значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuePosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;over&#x27;, &#x27;top&#x27;, &#x27;center&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showEnumValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать расчетные значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;startInNull&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Начинать с нуля<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;common&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать значения столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер значений точек, пх<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;18&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuesFontSizePx&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animation&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать анимацию<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации отрисовки<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации переключения<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationToggleAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenDataChange&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при изменение значений
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenLegendClick&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при клике на легенду
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'combo-bar-charts/chart-setting-combo-bar/chart-setting-combo-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}


<span class="hljs-selector-class">.button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
}

<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">box-sizing</span>: border-box;

  &amp;__chart-toggle {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span>;

    <span class="hljs-selector-tag">label</span> {
      <span class="hljs-attribute">font-size</span>: <span class="hljs-number">11px</span>;
    }
  }

  &amp;__color-toggle {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;

    <span class="hljs-selector-class">.color-item</span> {
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">align-items</span>: center;

      krui-<span class="hljs-selector-tag">form</span>-field {
        <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
      }
    }
  }


  &amp;__accordion {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;

    <span class="hljs-selector-class">.tab-content</span> {
      <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;
      <span class="hljs-attribute">box-sizing</span>: border-box;
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">flex-direction</span>: column;
      <span class="hljs-attribute">gap</span>: <span class="hljs-number">5px</span>;

      &amp;__item {
        <span class="hljs-attribute">display</span>: flex;
        <span class="hljs-attribute">gap</span>: <span class="hljs-number">15px</span>;
        <span class="hljs-attribute">align-items</span>: center;
        <span class="hljs-attribute">justify-content</span>: space-between;

        <span class="hljs-selector-class">.color-select</span> {
          <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
        }
      }
    }

    hr<span class="hljs-selector-class">.tab-delimeter</span> {
      <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">96%</span>;
    }
  }

}
`,	'combo-bar-charts/chart-setting-combo-bar/chart-setting-combo-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">Inject</span>, <span class="hljs-title class_">OnDestroy</span>, <span class="hljs-title class_">OnInit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Subscription</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;
<span class="hljs-keyword">import</span> { debounceTime } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs/operators&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>, <span class="hljs-title class_">IKruiOptionsFormType</span>,
  <span class="hljs-variable constant_">KRUI_CHART_FORM_CREATE_SERVICE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>,
  <span class="hljs-title class_">KruiChartFormCreateService</span>,
  kruiChartRandomDateArray,
  kruiChartRdmNumberData,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Настройки */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-setting-combo-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-setting-combo-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-setting-combo-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSettingComboBarComponent</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">OnInit</span>, <span class="hljs-title class_">OnDestroy</span> {
  <span class="hljs-keyword">public</span> interpolation = <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>;
  <span class="hljs-keyword">public</span> markers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>;
  <span class="hljs-keyword">public</span> dataMarkers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">optionsForm</span>: <span class="hljs-title class_">IKruiOptionsFormType</span>;
  <span class="hljs-keyword">public</span> isChartHorizontal = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">public</span> bgColor = <span class="hljs-string">&#x27;#0f37ff&#x27;</span>;
  <span class="hljs-keyword">public</span> brColor = <span class="hljs-string">&#x27;#3fff0f&#x27;</span>;
  <span class="hljs-keyword">public</span> brColor2 = <span class="hljs-string">&#x27;#4465b9&#x27;</span>;
  <span class="hljs-keyword">public</span> bgColor2 = <span class="hljs-string">&#x27;#FF4046&#x27;</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">BehaviorSubject</span>&lt;{
    <span class="hljs-attr">data</span>: [<span class="hljs-built_in">any</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][][]; <span class="hljs-attr">view</span>: <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>;
  }&gt; | <span class="hljs-literal">undefined</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">subscription</span>: <span class="hljs-title class_">Subscription</span>[] = [];

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-meta">@Inject</span>(KRUI_CHART_FORM_CREATE_SERVICE) <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">formCreateService</span>: <span class="hljs-title class_">KruiChartFormCreateService</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">formCreateService</span>.<span class="hljs-title function_">createSettingFormDefault</span>();
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnInit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>({
      <span class="hljs-attr">data</span>: [
        <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
        <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
      ],
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    });
    <span class="hljs-keyword">const</span> sub1 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">update</span>());

    <span class="hljs-keyword">const</span> sub2 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">isChartHorizontal</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (v) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;horizontal&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;horizontal-line&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;vertical&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;line&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;time&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      }
    });

    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span> = [sub1, sub2];
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnDestroy</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">sub</span> =&gt;</span> sub.<span class="hljs-title function_">unsubscribe</span>());
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// @ts-ignore</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>({
      <span class="hljs-attr">data</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>().<span class="hljs-property">axisX</span>.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;number&#x27;</span> ?
        [<span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>), <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>)] :
        [
          <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
          <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
        ],
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    }));
  }
}
`,
	'combo-bar-charts/chart-stack-combo-bar/chart-stack-combo-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;12&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-17)&#x27;, &#x27;var(--color-additional-11)&#x27;, &#x27;var(--color-additional-9)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartComboBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'combo-bar-charts/chart-stack-combo-bar/chart-stack-combo-bar.component.scss': ``,	'combo-bar-charts/chart-stack-combo-bar/chart-stack-combo-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartStackBarMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый*/</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-stack-combo-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-stack-combo-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-stack-combo-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartStackComboBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock1;
}
`,
	'combo-bar-charts/chart-update-combo-bar/chart-update-combo-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;2&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022,2023]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartComboBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'combo-bar-charts/chart-update-combo-bar/chart-update-combo-bar.component.scss': ``,	'combo-bar-charts/chart-update-combo-bar/chart-update-combo-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartNumberMock2, kruiChartRandomValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-update-combo-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-update-combo-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-update-combo-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartUpdateComboBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock2;


  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)]];
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span> = [...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)]];
  }
}
`,
	'combo-bar-charts/chart-update-horizontal-combo-bar/chart-update-horizontal-combo-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;smallCross&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;2&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2022]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalComboBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'combo-bar-charts/chart-update-horizontal-combo-bar/chart-update-horizontal-combo-bar.component.scss': ``,	'combo-bar-charts/chart-update-horizontal-combo-bar/chart-update-horizontal-combo-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartNumberMock2, kruiChartRandomValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-update-horizontal-combo-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-update-horizontal-combo-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-update-horizontal-combo-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartUpdateHorizontalComboBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock2;


  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)]];
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span> = [...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)]];
  }
}
`,
	'combo-charts/chart-combo-line-bar/chart-combo-line-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020, 2021]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartComboBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data2&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'combo-charts/chart-combo-line-bar/chart-combo-line-bar.component.scss': ``,	'combo-charts/chart-combo-line-bar/chart-combo-line-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartNumberMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Настраиваемый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-combo-line-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-combo-line-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-combo-line-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartComboLineBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock2;
}
`,
	'input/input-native-example/input-native-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Number<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;number&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Select<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Опция 1<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Опция 2<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Опция 3<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Опция 4<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Color<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span> <span class="hljs-attr">kruiInput</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Time<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Datetime<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime-local&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Week<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;week&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Month<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Email<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Url<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;url&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Textarea<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> [<span class="hljs-attr">rows</span>]=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
`,	'input/input-native-example/input-native-example.scss': `<span class="hljs-selector-class">.example-form-field</span> {
  <span class="hljs-attribute">max-width</span>: <span class="hljs-number">250px</span>;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">16px</span>;
  <span class="hljs-attribute">display</span>: block;
}
`,	'input/input-native-example/input-native-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Нативные контроллы */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;input-native-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./input-native-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./input-native-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">InputNativeExample</span> {}
`,
	'input/input-simple-example/input-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Подпись<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Текстровое поле&quot;</span> <span class="hljs-attr">kruiInput</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-hint</span>&gt;</span>Подсказка<span class="hljs-tag">&lt;/<span class="hljs-name">krui-hint</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-form-field&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 150px;&quot;</span> <span class="hljs-attr">kruiFitHeight</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-label</span>&gt;</span>Текст-ареа с заданной высотой и директивой [kruiFitHeight]<span class="hljs-tag">&lt;/<span class="hljs-name">krui-label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
    Какой-то текст
    Какой-то текст
    Какой-то текст
    Какой-то текст
    Какой-то текст
    Какой-то текст
  <span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-hint</span>&gt;</span>Подсказка<span class="hljs-tag">&lt;/<span class="hljs-name">krui-hint</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
`,	'input/input-simple-example/input-simple-example.scss': `<span class="hljs-selector-class">.example-form-field</span> {
  <span class="hljs-attribute">max-width</span>: <span class="hljs-number">250px</span>;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">30px</span>;
}
`,	'input/input-simple-example/input-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;input-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./input-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./input-simple-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">InputSimpleExample</span> {}
`,
	'line-charts/chart-animation-line/chart-animation-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;render$ | async&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
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
        [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream0&quot;</span>
        [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;durationAnimation1&quot;</span>
        [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
        <span class="hljs-attr">kruiChartLine</span>
      &gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
        [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
        [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
        [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream1&quot;</span>
        [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;durationAnimation2&quot;</span>
        [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
        <span class="hljs-attr">kruiChartLine</span>
      &gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;settings&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span>Длина анимации первой линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
      [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;durationAnimation1&quot;</span>
      [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1000&quot;</span>
      [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;200&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span>Длина анимации второй линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
      [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;durationAnimation2&quot;</span>
      [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1000&quot;</span>
      [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;200&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span> <span class="hljs-attr">kruiBtnIcon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'line-charts/chart-animation-line/chart-animation-line.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}

<span class="hljs-selector-class">.settings</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: auto auto auto;
  <span class="hljs-attribute">grid-column</span>-<span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">20px</span>;

  <span class="hljs-selector-class">.item</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: column;
  }
}
`,	'line-charts/chart-animation-line/chart-animation-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock3, kruiChartNumberMock4, kruiChartRdmNumberData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Анимация */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-animation-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-animation-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-animation-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartAnimationLineComponent</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream0</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][] = kruiChartNumberMock3;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream1</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][] = kruiChartNumberMock4;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">durationAnimation1</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">2000</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">durationAnimation2</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">3000</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">render$</span>: <span class="hljs-title class_">BehaviorSubject</span>&lt;<span class="hljs-built_in">boolean</span>&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">render$</span>.<span class="hljs-title function_">next</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">stream1</span> = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>) <span class="hljs-keyword">as</span> <span class="hljs-built_in">unknown</span> <span class="hljs-keyword">as</span> [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][];
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">stream0</span> = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>) <span class="hljs-keyword">as</span> <span class="hljs-built_in">unknown</span> <span class="hljs-keyword">as</span> [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][];
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">render$</span>.<span class="hljs-title function_">next</span>(<span class="hljs-literal">true</span>), <span class="hljs-number">0</span>);
  }
}
`,
	'line-charts/chart-enum-line/chart-enum-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;enum&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020]&quot;</span>
      [<span class="hljs-attr">dataPointType</span>]=<span class="hljs-string">&quot;&#x27;all&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-enum-line/chart-enum-line.component.scss': ``,	'line-charts/chart-enum-line/chart-enum-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartLineEnumMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Enum */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-enum-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-enum-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-enum-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartEnumLineComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartLineEnumMock1;
}
`,
	'line-charts/chart-interpolate-line/chart-interpolate-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
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
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;план&#x27;]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(104,37,212,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream1&quot;</span>
      [<span class="hljs-attr">interpolateEnable</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'line-charts/chart-interpolate-line/chart-interpolate-line.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">640px</span>;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}
`,	'line-charts/chart-interpolate-line/chart-interpolate-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRandomDateArray } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Интерполяция */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-interpolate-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-interpolate-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-interpolate-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartInterpolateLineComponent</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream1</span>: [<span class="hljs-built_in">any</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][] = [];

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnInit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">update</span>();
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">stream1</span> = <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">4000</span>, <span class="hljs-number">20</span>, <span class="hljs-number">400</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2005</span>, <span class="hljs-number">11</span>, <span class="hljs-number">17</span>), <span class="hljs-number">20</span>);
  }
}
`,
	'line-charts/chart-layer-line/chart-layer-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;default&#x27;&quot;</span> [<span class="hljs-attr">legend</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-index-blue)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data2&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>

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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-4)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-layer-line/chart-layer-line.component.scss': ``,	'line-charts/chart-layer-line/chart-layer-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock1, kruiChartNumberMock3 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Слои */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-layer-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-layer-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-layer-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartLayerLineComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock3;
}
`,
	'line-charts/chart-legend-tooltip-line/chart-legend-tooltip-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendPosition</span>]=<span class="hljs-string">&quot;&#x27;top&#x27;&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;custom&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;false&quot;</span>
            [<span class="hljs-attr">tooltipComponentType</span>]=<span class="hljs-string">&quot;&#x27;custom&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipComponent</span>]=<span class="hljs-string">&quot;tooltipComponent&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-legend-directive</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend&quot;</span>&gt;</span>
    @for (layer of chart?.legendGroups; track layer.layerId; let layerIndex = $index) {
      @for (label of layer.dataLayer; track label.layer.id) {
        @for (lab of label.data; track lab.title; let trendIndex = $index) {
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend__item&quot;</span>
               (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;chart?.onTrendInactivityChange(lab.type, label.layer, layer.layerId, layerIndex, trendIndex, lab.disabled = !lab.disabled)&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">style.background-color</span>]=<span class="hljs-string">&quot;lab.color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend__icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-legend__title&quot;</span>&gt;</span>{{ lab.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        }
      }
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-legend-directive</span>&gt;</span>

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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{ top: 15, right: 10, left: 10, bottom: 0 }&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-legend-tooltip-line/chart-legend-tooltip-line.component.scss': `krui-<span class="hljs-selector-tag">line</span>-chart {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span> <span class="hljs-number">0</span>;
}


<span class="hljs-selector-class">.custom-legend</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: row;
  <span class="hljs-attribute">justify-content</span>: flex-end;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">order</span>: <span class="hljs-number">1</span>;

  &amp;__item {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: row;
    <span class="hljs-attribute">justify-content</span>: center;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">cursor</span>: pointer;

    &amp;<span class="hljs-selector-pseudo">:hover</span> {
      <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
    }
  }

  &amp;__icon {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">18px</span>;
  }

  &amp;__title {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  }
}
`,	'line-charts/chart-legend-tooltip-line/chart-legend-tooltip-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ViewChild</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartComponent</span>, kruiChartNumberMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CustomLineTooltipComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./tooltip.component&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Кастомная легенда и тултип */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-legend-tooltip-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-legend-tooltip-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-legend-tooltip-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartLegendTooltipLineComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock1;
  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-title class_">KruiChartComponent</span>) <span class="hljs-keyword">public</span> <span class="hljs-attr">chart</span>: <span class="hljs-title class_">KruiChartComponent</span> | <span class="hljs-literal">undefined</span>;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> tooltipComponent = <span class="hljs-title class_">CustomLineTooltipComponent</span>;
}
`,	'line-charts/chart-legend-tooltip-line/tooltip.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
  @for (group of data; track group.title) {
    @for (row of group.rows; track row.title) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__item&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">style.background-color</span>]=<span class="hljs-string">&quot;row.color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__marker&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__value&quot;</span>&gt;</span>{{ row.value }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip__label&quot;</span>&gt;</span>{{ row.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'line-charts/chart-legend-tooltip-line/tooltip.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.tooltip</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--color-background-popup-widgets);
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;

  &amp;__item {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: row;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
  }

  &amp;__marker {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  }

  &amp;__value {
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
  }

  &amp;__label {
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-signatures-and-future);
  }
}
`,	'line-charts/chart-legend-tooltip-line/tooltip.component.ts': `<span class="hljs-keyword">import</span> { animate, state, style, transition, trigger } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/animations&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartTooltipBaseDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;


<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;tlui-line-tooltip-custom&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./tooltip.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./tooltip.component.scss&#x27;</span>],
  <span class="hljs-attr">animations</span>: [
    <span class="hljs-title function_">trigger</span>(<span class="hljs-string">&#x27;popup&#x27;</span>, [
      <span class="hljs-title function_">state</span>(<span class="hljs-string">&#x27;void&#x27;</span>, <span class="hljs-title function_">style</span>({ <span class="hljs-attr">opacity</span>: <span class="hljs-number">0</span> })),
      <span class="hljs-title function_">state</span>(<span class="hljs-string">&#x27;enter&#x27;</span>, <span class="hljs-title function_">style</span>({ <span class="hljs-attr">opacity</span>: <span class="hljs-number">1</span> })),
      <span class="hljs-title function_">transition</span>(<span class="hljs-string">&#x27;* =&gt; *&#x27;</span>, <span class="hljs-title function_">animate</span>(<span class="hljs-string">&#x27;200ms cubic-bezier(0.25, 0.8, 0.25, 1)&#x27;</span>))
    ])
  ],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomLineTooltipComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">KruiChartTooltipBaseDirective</span> {
}
`,
	'line-charts/chart-point-line/chart-point-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020]&quot;</span>
      [<span class="hljs-attr">dataPointType</span>]=<span class="hljs-string">&quot;&#x27;all&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream0&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2021]&quot;</span>
      [<span class="hljs-attr">dataPointType</span>]=<span class="hljs-string">&quot;&#x27;partial&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream1&quot;</span>
      [<span class="hljs-attr">setPointMapSettings</span>]=<span class="hljs-string">&quot;customPointType&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">breakPointType</span>]=<span class="hljs-string">&quot;&#x27;config&#x27;&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream2&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">breakPointType</span>]=<span class="hljs-string">&quot;&#x27;auto&#x27;&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream3&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-point-line/chart-point-line.component.scss': ``,	'line-charts/chart-point-line/chart-point-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { stream0, stream1, stream2, stream3 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./data&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiChartPointDataOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;


<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Точки */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-point-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-point-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-point-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartPointLineComponent</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream0</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][] = stream0;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream1</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][] = stream1;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream2</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][] = stream2;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream3</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][] = stream3;


  <span class="hljs-keyword">public</span> <span class="hljs-attr">customPointType</span>: { <span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">opt</span>: <span class="hljs-title class_">KruiChartPointDataOptions</span> }[] = [
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;customPoint&#x27;</span>,
      <span class="hljs-attr">opt</span>: {
        <span class="hljs-attr">pointMarkers</span>: [<span class="hljs-string">&#x27;symbolSquare&#x27;</span>],
        <span class="hljs-attr">pointVisible</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">pointColor</span>: <span class="hljs-string">&#x27;red&#x27;</span>,
        <span class="hljs-attr">pointStrokeColor</span>: <span class="hljs-string">&#x27;auto&#x27;</span>,
        <span class="hljs-attr">pointSize</span>: <span class="hljs-number">10</span>,
        <span class="hljs-attr">pointStrokeSize</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">pointLimit</span>: <span class="hljs-number">100</span>
      }
    }
  ] <span class="hljs-keyword">as</span> { <span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">opt</span>: <span class="hljs-title class_">KruiChartPointDataOptions</span> }[];
}
`,	'line-charts/chart-point-line/data.ts': `<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> stream0 = [
  [<span class="hljs-number">0</span>, <span class="hljs-number">20</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">10</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">40</span>],
  [<span class="hljs-number">3</span>, <span class="hljs-number">50</span>],
  [<span class="hljs-number">4</span>, <span class="hljs-number">43</span>],
  [<span class="hljs-number">5</span>, <span class="hljs-number">30</span>],
  [<span class="hljs-number">6</span>, <span class="hljs-number">10</span>],
  [<span class="hljs-number">7</span>, <span class="hljs-number">45</span>]
] <span class="hljs-keyword">as</span> [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> stream1 = [
  [<span class="hljs-number">0</span>, <span class="hljs-number">40</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">55</span>, <span class="hljs-string">&#x27;dataPoint&#x27;</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">60</span>, <span class="hljs-string">&#x27;customPoint&#x27;</span>],
  [<span class="hljs-number">3</span>, <span class="hljs-number">70</span>, <span class="hljs-string">&#x27;dataFillPoint&#x27;</span>],
  [<span class="hljs-number">4</span>, <span class="hljs-number">55</span>, <span class="hljs-string">&#x27;dataFillPointReWrite&#x27;</span>],
  [<span class="hljs-number">5</span>, <span class="hljs-number">50</span>, <span class="hljs-string">&#x27;customPoint&#x27;</span>],
  [<span class="hljs-number">6</span>, <span class="hljs-number">30</span>, <span class="hljs-string">&#x27;dataPointReWrite&#x27;</span>],
  [<span class="hljs-number">7</span>, <span class="hljs-number">65</span>]
] <span class="hljs-keyword">as</span> [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> stream2 = [
  [<span class="hljs-number">0</span>, <span class="hljs-number">90</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">80</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">110</span>, <span class="hljs-string">&#x27;breakPoint&#x27;</span>],
  [<span class="hljs-number">3</span>, <span class="hljs-number">120</span>, <span class="hljs-string">&#x27;breakPoint&#x27;</span>],
  [<span class="hljs-number">4</span>, <span class="hljs-number">100</span>, <span class="hljs-string">&#x27;breakPoint&#x27;</span>],
  [<span class="hljs-number">5</span>, <span class="hljs-number">80</span>],
  [<span class="hljs-number">6</span>, <span class="hljs-number">60</span>],
  [<span class="hljs-number">7</span>, <span class="hljs-number">115</span>]
] <span class="hljs-keyword">as</span> [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> stream3 = [
  [<span class="hljs-number">0</span>, <span class="hljs-number">60</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">70</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-literal">null</span>],
  [<span class="hljs-number">3</span>, <span class="hljs-literal">null</span>],
  [<span class="hljs-number">4</span>, <span class="hljs-literal">null</span>],
  [<span class="hljs-number">5</span>, <span class="hljs-number">70</span>],
  [<span class="hljs-number">6</span>, <span class="hljs-number">50</span>],
  [<span class="hljs-number">7</span>, <span class="hljs-number">85</span>]
] <span class="hljs-keyword">as</span> [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>][];
`,
	'line-charts/chart-setting-line/chart-setting-line.component.html': `@if ((options | async); as chartOptions) {
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span>
    [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
    [<span class="hljs-attr">setDefIfContainerSizeInvalid</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">bgColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.bgColor&quot;</span>
    [<span class="hljs-attr">borderColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderColor&quot;</span>
    [<span class="hljs-attr">borderRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderRadius&quot;</span>
    [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.chartOrientation&quot;</span>
    [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendAxis&quot;</span>
    [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendLayer&quot;</span>
    [<span class="hljs-attr">legendPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendPosition&quot;</span>
    [<span class="hljs-attr">legendTrend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendTrend&quot;</span>
    [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendType&quot;</span>
    [<span class="hljs-attr">legend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legend&quot;</span>
    [<span class="hljs-attr">marginBottom</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginBottom&quot;</span>
    [<span class="hljs-attr">marginLeft</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginLeft&quot;</span>
    [<span class="hljs-attr">marginRight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginRight&quot;</span>
    [<span class="hljs-attr">marginTop</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginTop&quot;</span>
    [<span class="hljs-attr">resizeObserveType</span>]=<span class="hljs-string">&quot;chartOptions.view?.resizeObserveType&quot;</span>
    [<span class="hljs-attr">smartScrollEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollEnable&quot;</span>
    [<span class="hljs-attr">smartScrollHeight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollHeight&quot;</span>
    [<span class="hljs-attr">toolbarJustifyContent</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarJustifyContent&quot;</span>
    [<span class="hljs-attr">toolbarPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarPosition&quot;</span>
    [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbar&quot;</span>
    [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipColor&quot;</span>
    [<span class="hljs-attr">tooltipMarkerCrossSize</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerCrossSize&quot;</span>
    [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerType&quot;</span>
    [<span class="hljs-attr">tooltipShowMilliseconds</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipShowMilliseconds&quot;</span>
    [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipType&quot;</span>
    [<span class="hljs-attr">tooltipWidth</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipWidth&quot;</span>
    [<span class="hljs-attr">tooltip</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltip&quot;</span>
    [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;chartOptions.view?.zoomType&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>
      [<span class="hljs-attr">layerTitle</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.layerTitle&quot;</span>
      [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipColor&quot;</span>
      [<span class="hljs-attr">tooltipEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipEnable&quot;</span>
      [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomPrimaryEnable&quot;</span>
      [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomSecondaryEnable&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
        [<span class="hljs-attr">lineType</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config.lineType&quot;</span>
        [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;]&quot;</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config.color&quot;</span>
        [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[chartOptions.view?.lineLayer?.config.color, &#x27;#fff&#x27;]&quot;</span>
        [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
        [<span class="hljs-attr">lineOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config.lineOpacity&quot;</span>
        [<span class="hljs-attr">lineDynamics</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.lineDynamics&quot;</span>
        [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.animation&quot;</span>
        [<span class="hljs-attr">breakPointMarker</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.breakPointMarker&quot;</span>
        [<span class="hljs-attr">breakPointSize</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.breakPointSize&quot;</span>
        [<span class="hljs-attr">breakPoint</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.breakPoint&quot;</span>
        [<span class="hljs-attr">dataPointMarker</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.dataPointMarker&quot;</span>
        [<span class="hljs-attr">dataPointType</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.dataPointType&quot;</span>
        [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.durationAnimation&quot;</span>
        [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.durationToggleAnimation&quot;</span>
        [<span class="hljs-attr">endPointSize</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.endPointSize&quot;</span>
        [<span class="hljs-attr">endPoint</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.endPoint&quot;</span>
        [<span class="hljs-attr">interpolateEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.config?.interpolateEnable&quot;</span>
        [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.reRangeThenDataChange&quot;</span>
        [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.reRangeThenLegendClick&quot;</span>
        [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.showValues&quot;</span>
        [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.valuesFontSizePx&quot;</span>
        [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.lineLayer?.common?.workgroundPadding&quot;</span>
        <span class="hljs-attr">kruiChartLine</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
}

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;optionsForm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-accordion</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__accordion&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;График&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;bgColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;borderColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Смарт-скролл
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет смарт-скролла<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Тоолтип&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Тултип<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipShowMilliseconds&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать миллисекунды<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;fullLine&#x27;, &#x27;dataPoint&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Маркер тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;line&#x27;, &#x27;horizontal-line&#x27;, &#x27;smallCross&#x27;, &#x27;fullscreenCross&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет маркера<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          [<span class="hljs-attr">class.krui-disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.tooltip.controls.tooltipMarkerType.value !== &#x27;smallCross&#x27;&quot;</span>
          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>
        &gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер маркера<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerCrossSize&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Толщина линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipWidth&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Панель управления&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;toolbar&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbar&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Панель управления<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarPosition&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Выравнивание<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarJustifyContent&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span>
                *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;
                  let option of [&#x27;center&#x27;, &#x27;flex-start&#x27;, &#x27;flex-end&#x27;, &#x27;space-between&#x27;, &#x27;space-around&#x27;, &#x27;space-evenly&#x27;]
                &quot;</span>
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Легенда&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;legend&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Легенда<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendLayer&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки слоя
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendAxis&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки осей
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendTrend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки трендов и столбцов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Эффект подстветки трендов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип легенды<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;default&#x27;, &#x27;simple-style&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendPosition&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Зум&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;layer&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomPrimaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси х<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomSecondaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси y<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип зума<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;none&#x27;, &#x27;brush&#x27;, &#x27;scroll&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Х&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси х<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Y&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси у<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;left&#x27;, &#x27;right&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;lineLayer&quot;</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Тренд&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;config&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;lineType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;line&#x27; , &#x27;area&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;interpolateEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Интерполяция значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип тренда<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;lineDynamics&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of interpolation&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Прозрачность<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;0.1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;lineOpacity&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Точки данных<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;dataPointType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;all&#x27;, &#x27;partial&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Маркер точки данных<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;dataPointMarker&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of dataMarkers&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;breakPoint&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Точки разрыва данных<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Маркер точки разрыва данных<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;breakPointMarker&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of markers&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер маркера точки разрыва данных<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;breakPointSize&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;endPoint&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Конечная точка<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер маркера конечной точки<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;endPointSize&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;common&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать значения точек<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер значений точек, пх<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;18&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuesFontSizePx&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animation&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать анимацию<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации отрисовки<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации переключения<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationToggleAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenDataChange&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при изменение значений
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenLegendClick&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при клике на легенду
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span> <span class="hljs-attr">kruiBtnIcon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'line-charts/chart-setting-line/chart-setting-line.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}


<span class="hljs-selector-class">.button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
}

<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">box-sizing</span>: border-box;

  &amp;__accordion {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;

    <span class="hljs-selector-class">.tab-content</span> {
      <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;
      <span class="hljs-attribute">box-sizing</span>: border-box;
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">flex-direction</span>: column;
      <span class="hljs-attribute">gap</span>: <span class="hljs-number">5px</span>;

      &amp;__item {
        <span class="hljs-attribute">display</span>: flex;
        <span class="hljs-attribute">gap</span>: <span class="hljs-number">15px</span>;
        <span class="hljs-attribute">align-items</span>: center;
        <span class="hljs-attribute">justify-content</span>: space-between;

        <span class="hljs-selector-class">.color-select</span> {
          <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
        }
      }
    }

    hr<span class="hljs-selector-class">.tab-delimeter</span> {
      <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">96%</span>;
    }
  }
}
`,	'line-charts/chart-setting-line/chart-setting-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">Inject</span>, <span class="hljs-title class_">OnDestroy</span>, <span class="hljs-title class_">OnInit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Subscription</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;
<span class="hljs-keyword">import</span> { debounceTime } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs/operators&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>,
  <span class="hljs-title class_">IKruiOptionsFormType</span>,
  <span class="hljs-variable constant_">KRUI_CHART_FORM_CREATE_SERVICE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>,
  <span class="hljs-title class_">KruiChartFormCreateService</span>,
  kruiChartRandomDateArray,
  kruiChartRdmNumberData,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Настройки */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-setting-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-setting-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-setting-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSettingLineComponent</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">OnInit</span>, <span class="hljs-title class_">OnDestroy</span> {
  <span class="hljs-keyword">public</span> interpolation = <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>;
  <span class="hljs-keyword">public</span> markers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>;
  <span class="hljs-keyword">public</span> dataMarkers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">optionsForm</span>: <span class="hljs-title class_">IKruiOptionsFormType</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">BehaviorSubject</span>&lt;{
    <span class="hljs-attr">data</span>: [<span class="hljs-built_in">any</span>, <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>, <span class="hljs-built_in">any</span>][]; <span class="hljs-attr">view</span>: <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>;
  }&gt; | <span class="hljs-literal">undefined</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">subscription</span>: <span class="hljs-title class_">Subscription</span> | <span class="hljs-literal">undefined</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-meta">@Inject</span>(KRUI_CHART_FORM_CREATE_SERVICE) <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">formCreateService</span>: <span class="hljs-title class_">KruiChartFormCreateService</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">formCreateService</span>.<span class="hljs-title function_">createSettingFormDefault</span>();
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnInit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>(
      { <span class="hljs-attr">data</span>: <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>) <span class="hljs-keyword">as</span> [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>, <span class="hljs-built_in">any</span>][], <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>() },
    );
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">update</span>());
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnDestroy</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span>!.<span class="hljs-title function_">unsubscribe</span>();
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// @ts-ignore</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>({
      <span class="hljs-attr">data</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>().<span class="hljs-property">axisX</span>.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;number&#x27;</span>
        ? <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">v</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>] | [<span class="hljs-built_in">number</span>, <span class="hljs-literal">null</span>, <span class="hljs-built_in">string</span>], <span class="hljs-attr">i</span>: <span class="hljs-built_in">number</span></span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (i === <span class="hljs-number">2</span>) {
            <span class="hljs-keyword">return</span> [<span class="hljs-number">2</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&#x27;&#x27;</span>];
          }
          <span class="hljs-keyword">return</span> v;
        })
        : <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>),
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    }));
  }
}
`,
	'line-charts/chart-simple-line/chart-simple-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(37,81,212,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgb(37,212,171)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data2&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-simple-line/chart-simple-line.component.scss': ``,	'line-charts/chart-simple-line/chart-simple-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock3, kruiChartNumberMock4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-simple-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-simple-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-simple-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSimpleLineComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock3;
  <span class="hljs-keyword">public</span> data2 = kruiChartNumberMock4;
}
`,
	'line-charts/chart-time-line/chart-time-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">formatFunc</span>]=<span class="hljs-string">&quot;formatter&quot;</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-13)&#x27;&quot;</span>
      [<span class="hljs-attr">dataPointType</span>]=<span class="hljs-string">&quot;&#x27;all&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-time-line/chart-time-line.component.scss': ``,	'line-charts/chart-time-line/chart-time-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { formatter, stream1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./const&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Временной */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-time-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-time-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-time-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartTimeLineComponent</span> {
  <span class="hljs-keyword">public</span> data = stream1;

  <span class="hljs-keyword">public</span> formatter = formatter;
}
`,	'line-charts/chart-time-line/const.ts': `<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> d3 <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;d3&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">KRUI_CHART_RU</span>, <span class="hljs-title class_">KruiChartLineInputData</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;


<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> stream1 = [
  [<span class="hljs-string">&#x27;2022-01-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">48</span>],
  [<span class="hljs-string">&#x27;2022-02-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">44</span>],
  [<span class="hljs-string">&#x27;2022-03-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">40</span>],
  [<span class="hljs-string">&#x27;2022-04-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">39</span>],
  [<span class="hljs-string">&#x27;2022-05-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">35</span>],
  [<span class="hljs-string">&#x27;2022-06-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">34</span>],
  [<span class="hljs-string">&#x27;2022-07-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">33</span>],
  [<span class="hljs-string">&#x27;2022-08-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">37</span>],
  [<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">38</span>],
  [<span class="hljs-string">&#x27;2022-10-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">43</span>],
  [<span class="hljs-string">&#x27;2022-11-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">44</span>],
  [<span class="hljs-string">&#x27;2022-12-01T00:00:00.0000000Z&#x27;</span>, <span class="hljs-number">48</span>]
] <span class="hljs-keyword">as</span> <span class="hljs-title class_">KruiChartLineInputData</span>[];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">formatter</span>(<span class="hljs-params"><span class="hljs-attr">date</span>: <span class="hljs-title class_">Date</span>, ...<span class="hljs-attr">arg</span>: <span class="hljs-built_in">any</span>[]</span>): <span class="hljs-built_in">string</span> {
  <span class="hljs-keyword">let</span> locale = d3.<span class="hljs-title function_">timeFormatLocale</span>({ ...(<span class="hljs-variable constant_">KRUI_CHART_RU</span>), <span class="hljs-attr">periods</span>: [<span class="hljs-string">&#x27;&#x27;</span>, <span class="hljs-string">&#x27;&#x27;</span>] });
  <span class="hljs-keyword">let</span> formatMillisecond = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%M:%S.%L&#x27;</span>),
    formatSecond = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%M:%S&#x27;</span>),
    formatMinute = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%H:%M&#x27;</span>),
    formatHour = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%H:%M&#x27;</span>),
    formatDay = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%d %b&#x27;</span>),
    formatWeek = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%d %b&#x27;</span>),
    formatMonth = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%b&#x27;</span>),
    formatYear = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%b %Y&#x27;</span>);

  <span class="hljs-keyword">return</span> (
    d3.<span class="hljs-title function_">timeSecond</span>(date) &lt; date
      ? formatMillisecond
      : d3.<span class="hljs-title function_">timeMinute</span>(date) &lt; date
        ? formatSecond
        : d3.<span class="hljs-title function_">timeHour</span>(date) &lt; date
          ? formatMinute
          : d3.<span class="hljs-title function_">timeDay</span>(date) &lt; date
            ? formatHour
            : d3.<span class="hljs-title function_">timeMonth</span>(date) &lt; date
              ? d3.<span class="hljs-title function_">timeWeek</span>(date) &lt; date
                ? formatDay
                : formatWeek
              : d3.<span class="hljs-title function_">timeYear</span>(date) &lt; date
                ? formatMonth
                : formatYear
  )(date);
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">formatterWithoutMonth</span>(<span class="hljs-params"><span class="hljs-attr">date</span>: <span class="hljs-title class_">Date</span>, ...<span class="hljs-attr">arg</span>: <span class="hljs-built_in">any</span>[]</span>): <span class="hljs-built_in">string</span> {
  <span class="hljs-keyword">let</span> locale = d3.<span class="hljs-title function_">timeFormatLocale</span>({ ...(<span class="hljs-variable constant_">KRUI_CHART_RU</span>), <span class="hljs-attr">periods</span>: [<span class="hljs-string">&#x27;&#x27;</span>, <span class="hljs-string">&#x27;&#x27;</span>] });
  <span class="hljs-keyword">let</span> formatMillisecond = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%M:%S.%L&#x27;</span>),
    formatSecond = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%M:%S&#x27;</span>),
    formatMinute = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%H:%M&#x27;</span>),
    formatHour = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%H:%M&#x27;</span>),
    formatDay = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%d&#x27;</span>),
    formatWeek = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%d %b&#x27;</span>),
    formatMonth = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%b&#x27;</span>),
    formatYear = locale.<span class="hljs-title function_">format</span>(<span class="hljs-string">&#x27;%b %Y&#x27;</span>);

  <span class="hljs-keyword">return</span> (
    d3.<span class="hljs-title function_">timeSecond</span>(date) &lt; date
      ? formatMillisecond
      : d3.<span class="hljs-title function_">timeMinute</span>(date) &lt; date
        ? formatSecond
        : d3.<span class="hljs-title function_">timeHour</span>(date) &lt; date
          ? formatMinute
          : d3.<span class="hljs-title function_">timeDay</span>(date) &lt; date
            ? formatHour
            : d3.<span class="hljs-title function_">timeMonth</span>(date) &lt; date
              ? d3.<span class="hljs-title function_">timeWeek</span>(date) &lt; date
                ? formatDay
                : formatWeek
              : d3.<span class="hljs-title function_">timeYear</span>(date) &lt; date
                ? formatMonth
                : formatYear
  )(date);
}
`,
	'line-charts/chart-type-line/chart-type-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream0&quot;</span>
      [<span class="hljs-attr">lineDynamics</span>]=<span class="hljs-string">&quot;&#x27;curveLinear&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2021]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream1&quot;</span>
      [<span class="hljs-attr">lineDynamics</span>]=<span class="hljs-string">&quot;&#x27;curveMonotoneX&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2022]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream2&quot;</span>
      [<span class="hljs-attr">lineDynamics</span>]=<span class="hljs-string">&quot;&#x27;curveStep&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;stream3&quot;</span>
      [<span class="hljs-attr">lineDynamics</span>]=<span class="hljs-string">&quot;&#x27;curveBasis&#x27;&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-type-line/chart-type-line.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">630px</span>;
}
`,	'line-charts/chart-type-line/chart-type-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRdmNumberData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Типы трендов */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-type-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-type-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-type-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartTypeLineComponent</span> {
  <span class="hljs-keyword">private</span> randomInt = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">10</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream0</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][] = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">randomInt</span>);
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream1</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][] = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">randomInt</span>);
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream2</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][] = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">randomInt</span>);
  <span class="hljs-keyword">public</span> <span class="hljs-attr">stream3</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][] = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">randomInt</span>);
}
`,
	'line-charts/chart-update-line/chart-update-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-index-yellow)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-index-green)&#x27;, &#x27;var(--color-index-blue)&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'line-charts/chart-update-line/chart-update-line.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">640px</span>;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}
`,	'line-charts/chart-update-line/chart-update-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRandomValue, kruiChartRdmNumberData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-update-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-update-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-update-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartUpdateLineComponent</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-attr">data</span>: [<span class="hljs-built_in">number</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][] = <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">20</span>);

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span>, <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>), <span class="hljs-string">&#x27;&#x27;</span>]];
  }
}
`,
	'line-charts/chart-zoom-line/chart-zoom-line.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;false&quot;</span> [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;&#x27;brush&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2023]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;var(--color-additional-5)&#x27;&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      <span class="hljs-attr">kruiChartLine</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'line-charts/chart-zoom-line/chart-zoom-line.component.scss': ``,	'line-charts/chart-zoom-line/chart-zoom-line.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartNumberMock4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Zoom */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-zoom-line&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-zoom-line.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-zoom-line.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartZoomLineComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartNumberMock4;
}
`,
	'range/range-simple-example/range-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-range</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-range</span>&gt;</span>
`,	'range/range-simple-example/range-simple-example.scss': `krui-range {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
}
`,	'range/range-simple-example/range-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;range-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./range-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./range-simple-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">RangeSimpleComponent</span> {}
`,
	'range-bar-charts/chart-horizontal-range-bar/chart-horizontal-range-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span> [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(45, 141, 237)&#x27;, &#x27;rgb(45, 141, 237)&#x27;]&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(45, 141, 237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;red&#x27;, &#x27;yellow&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalRangeBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'range-bar-charts/chart-horizontal-range-bar/chart-horizontal-range-bar.component.scss': ``,	'range-bar-charts/chart-horizontal-range-bar/chart-horizontal-range-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRangeBarMock1, kruiChartRangeBarMock2, kruiChartRangeBarStackMock } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Горизонтальный */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-horizontal-range-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-horizontal-range-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-horizontal-range-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartHorizontalRangeBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartRangeBarMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartRangeBarMock2;
  <span class="hljs-keyword">public</span> data3 = kruiChartRangeBarStackMock;
}
`,
	'range-bar-charts/chart-horizontal-range-bar-update/chart-horizontal-range-bar-update.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(45, 141, 237)&#x27;]&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(237,199,45,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;#8b0019&#x27;, &#x27;#0bb80e&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalRangeBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'range-bar-charts/chart-horizontal-range-bar-update/chart-horizontal-range-bar-update.component.scss': ``,	'range-bar-charts/chart-horizontal-range-bar-update/chart-horizontal-range-bar-update.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRandomValue, kruiChartRangeBarMock1, kruiChartRangeBarMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-horizontal-range-bar-update&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-horizontal-range-bar-update.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-horizontal-range-bar-update.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartHorizontalRangeBarUpdateComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartRangeBarMock2;
  <span class="hljs-keyword">public</span> data2 = kruiChartRangeBarMock1;

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [
      ...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, [<span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)], <span class="hljs-string">&#x27;&#x27;</span>],
    ];
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span> = [
      ...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, [<span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)], <span class="hljs-string">&#x27;&#x27;</span>],
    ];
  }
}
`,
	'range-bar-charts/chart-range-bar/chart-range-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(45, 141, 237)&#x27;]&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(45, 141, 237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;grey&#x27;, &#x27;brown&#x27;, &#x27;pink&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartRangeBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'range-bar-charts/chart-range-bar/chart-range-bar.component.scss': ``,	'range-bar-charts/chart-range-bar/chart-range-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRangeBarMock1, kruiChartRangeBarMock2, kruiChartRangeBarStackMock } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-range-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-range-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-range-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartRangeBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartRangeBarMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartRangeBarMock2;
  <span class="hljs-keyword">public</span> data3 = kruiChartRangeBarStackMock;
}
`,
	'range-bar-charts/chart-range-bar-setting/chart-range-bar-setting.component.html': `@if ((options | async); as chartOptions) {
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span>
    [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
    [<span class="hljs-attr">setDefIfContainerSizeInvalid</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">bgColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.bgColor&quot;</span>
    [<span class="hljs-attr">borderColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderColor&quot;</span>
    [<span class="hljs-attr">borderRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderRadius&quot;</span>
    [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.chartOrientation&quot;</span>
    [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendAxis&quot;</span>
    [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendLayer&quot;</span>
    [<span class="hljs-attr">legendPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendPosition&quot;</span>
    [<span class="hljs-attr">legendTrend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendTrend&quot;</span>
    [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendType&quot;</span>
    [<span class="hljs-attr">legend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legend&quot;</span>
    [<span class="hljs-attr">marginBottom</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginBottom&quot;</span>
    [<span class="hljs-attr">marginLeft</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginLeft&quot;</span>
    [<span class="hljs-attr">marginRight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginRight&quot;</span>
    [<span class="hljs-attr">marginTop</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginTop&quot;</span>
    [<span class="hljs-attr">resizeObserveType</span>]=<span class="hljs-string">&quot;chartOptions.view?.resizeObserveType&quot;</span>
    [<span class="hljs-attr">smartScrollEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollEnable&quot;</span>
    [<span class="hljs-attr">smartScrollHeight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollHeight&quot;</span>
    [<span class="hljs-attr">toolbarJustifyContent</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarJustifyContent&quot;</span>
    [<span class="hljs-attr">toolbarPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarPosition&quot;</span>
    [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbar&quot;</span>
    [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipColor&quot;</span>
    [<span class="hljs-attr">tooltipMarkerCrossSize</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerCrossSize&quot;</span>
    [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerType&quot;</span>
    [<span class="hljs-attr">tooltipShowMilliseconds</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipShowMilliseconds&quot;</span>
    [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipType&quot;</span>
    [<span class="hljs-attr">tooltipWidth</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipWidth&quot;</span>
    [<span class="hljs-attr">tooltip</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltip&quot;</span>
    [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;chartOptions.view?.zoomType&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>
      [<span class="hljs-attr">layerTitle</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.layerTitle&quot;</span>
      [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipColor&quot;</span>
      [<span class="hljs-attr">tooltipEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipEnable&quot;</span>
      [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomPrimaryEnable&quot;</span>
      [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomSecondaryEnable&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

      @if (isChartHorizontal.value) {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;, &#x27;Тестовый пример 2&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;bgColor&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[bgColor, bgColor2]&quot;</span>
          [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[brColor, brColor2]&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">stackWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.stackWidthPercent&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartHorizontalRangeBar</span>
        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      } @else {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;, &#x27;Тестовый пример 2&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;bgColor&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[bgColor, bgColor2]&quot;</span>
          [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[brColor, brColor2]&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">stackWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.stackWidthPercent&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.comboBarLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartRangeBar</span>
        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
}

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__chart-toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Вертикальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span>
      [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;isChartHorizontal&quot;</span>
      [<span class="hljs-attr">iconOff</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartGantt&#x27;&quot;</span>
      [<span class="hljs-attr">iconOn</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartColumns&#x27;&quot;</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Горизонтальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__color-toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;bgColor&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;brColor&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;bgColor2&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;brColor2&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>


  <span class="hljs-tag">&lt;<span class="hljs-name">krui-accordion</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;optionsForm&quot;</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__accordion&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;График&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;bgColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;borderColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Смарт-скролл
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет смарт-скролла<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Тоолтип&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Тултип<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipShowMilliseconds&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать миллисекунды<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;fullLine&#x27;, &#x27;dataPoint&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Маркер тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;line&#x27;, &#x27;horizontal-line&#x27;, &#x27;smallCross&#x27;, &#x27;fullscreenCross&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет маркера<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          [<span class="hljs-attr">class.krui-disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.tooltip.controls.tooltipMarkerType.value !== &#x27;smallCross&#x27;&quot;</span>
          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>
        &gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер маркера<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerCrossSize&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Толщина линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipWidth&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Панель управления&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;toolbar&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbar&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Панель управления<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarPosition&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Выравнивание<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarJustifyContent&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span>
                *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;
                  let option of [&#x27;center&#x27;, &#x27;flex-start&#x27;, &#x27;flex-end&#x27;, &#x27;space-between&#x27;, &#x27;space-around&#x27;, &#x27;space-evenly&#x27;]
                &quot;</span>
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Легенда&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;legend&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Легенда<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendLayer&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки слоя
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendAxis&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки осей
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendTrend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки трендов и столбцов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Эффект подстветки трендов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип легенды<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;default&#x27;, &#x27;simple-style&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendPosition&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Зум&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;layer&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomPrimaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси х<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomSecondaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси y<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип зума<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;none&#x27;, &#x27;brush&#x27;, &#x27;scroll&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Х&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси х<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Y&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси у<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;left&#x27;, &#x27;right&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;comboBarLayer&quot;</span>
                 <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Комбинированный столбец&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;config&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип анимации<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animationType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;growth&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Заливка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barType&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;gradient&#x27;, &#x27;solidColor&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Ширина столбца, %<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barWidthPercent&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Ширина группы, %<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;stackWidthPercent&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Скругление столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barRadius&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barBorder&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Обводка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Прозрачность<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;0.1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barOpacity&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Эффект наведения курсора<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет эффекта наведения<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverColor&quot;</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Положение значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuePosition&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">kruiInput</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;over&#x27;, &#x27;top&#x27;, &#x27;center&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showEnumValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать расчетные значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;startInNull&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Начинать с нуля<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;common&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать значения столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер значений точек, пх<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;18&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuesFontSizePx&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animation&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать анимацию<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации отрисовки<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации переключения<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationToggleAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenDataChange&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при изменение значений
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenLegendClick&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при клике на легенду
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span> <span class="hljs-attr">kruiBtnIcon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'range-bar-charts/chart-range-bar-setting/chart-range-bar-setting.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}


<span class="hljs-selector-class">.button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
}

<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">box-sizing</span>: border-box;

  &amp;__chart-toggle {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span>;

    <span class="hljs-selector-tag">label</span> {
      <span class="hljs-attribute">font-size</span>: <span class="hljs-number">11px</span>;
    }
  }

  &amp;__color-toggle {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;

    <span class="hljs-selector-class">.color-item</span> {
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">align-items</span>: center;

      krui-<span class="hljs-selector-tag">form</span>-field {
        <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
      }
    }
  }


  &amp;__accordion {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;

    <span class="hljs-selector-class">.tab-content</span> {
      <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;
      <span class="hljs-attribute">box-sizing</span>: border-box;
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">flex-direction</span>: column;
      <span class="hljs-attribute">gap</span>: <span class="hljs-number">5px</span>;

      &amp;__item {
        <span class="hljs-attribute">display</span>: flex;
        <span class="hljs-attribute">gap</span>: <span class="hljs-number">15px</span>;
        <span class="hljs-attribute">align-items</span>: center;
        <span class="hljs-attribute">justify-content</span>: space-between;

        <span class="hljs-selector-class">.color-select</span> {
          <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
        }
      }
    }

    hr<span class="hljs-selector-class">.tab-delimeter</span> {
      <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">96%</span>;
    }
  }

}
`,	'range-bar-charts/chart-range-bar-setting/chart-range-bar-setting.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">Inject</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Subscription</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;
<span class="hljs-keyword">import</span> { debounceTime } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs/operators&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>,
  <span class="hljs-title class_">IKruiOptionsFormType</span>,
  <span class="hljs-variable constant_">KRUI_CHART_FORM_CREATE_SERVICE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>,
  <span class="hljs-title class_">KruiChartFormCreateService</span>,
  kruiChartRandomDateStackArray,
  kruiChartRangeBarMock1,
  kruiChartRangeBarMock2,
  kruiChartRangeBarStackMock,
  kruiChartRdmNumberStackData,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;


<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Настройки */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-range-bar-setting&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-range-bar-setting.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-range-bar-setting.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartRangeBarSettingComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartRangeBarMock1;
  <span class="hljs-keyword">public</span> data2 = kruiChartRangeBarMock2;
  <span class="hljs-keyword">public</span> data3 = kruiChartRangeBarStackMock;


  <span class="hljs-keyword">public</span> interpolation = <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>;
  <span class="hljs-keyword">public</span> markers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>;
  <span class="hljs-keyword">public</span> dataMarkers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">optionsForm</span>: <span class="hljs-title class_">IKruiOptionsFormType</span>;
  <span class="hljs-keyword">public</span> isChartHorizontal = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">public</span> bgColor = <span class="hljs-string">&#x27;#4b66c2&#x27;</span>;
  <span class="hljs-keyword">public</span> brColor = <span class="hljs-string">&#x27;#bb5362&#x27;</span>;
  <span class="hljs-keyword">public</span> brColor2 = <span class="hljs-string">&#x27;rgb(242,171,171)&#x27;</span>;
  <span class="hljs-keyword">public</span> bgColor2 = <span class="hljs-string">&#x27;rgb(237,112,112)&#x27;</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">BehaviorSubject</span>&lt;{
    <span class="hljs-attr">data</span>: [<span class="hljs-built_in">any</span>, <span class="hljs-built_in">any</span>, <span class="hljs-built_in">any</span>][][]; <span class="hljs-attr">view</span>: <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>;
  }&gt; | <span class="hljs-literal">undefined</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">subscription</span>: <span class="hljs-title class_">Subscription</span>[] = [];

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-meta">@Inject</span>(KRUI_CHART_FORM_CREATE_SERVICE) <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">formCreateService</span>: <span class="hljs-title class_">KruiChartFormCreateService</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">formCreateService</span>.<span class="hljs-title function_">createSettingFormDefault</span>();
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnInit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
      <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">tooltip</span>: <span class="hljs-literal">false</span> },
      <span class="hljs-attr">comboBarLayer</span>: {
        <span class="hljs-attr">common</span>: {
          <span class="hljs-attr">showValues</span>: <span class="hljs-literal">true</span>,
        },
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">tooltipHoverEffect</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">barBorder</span>: <span class="hljs-literal">true</span>,
        },
      },
    });

    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>({
      <span class="hljs-attr">data</span>: [
        <span class="hljs-title function_">kruiChartRandomDateStackArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
        <span class="hljs-title function_">kruiChartRandomDateStackArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
      ],
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    });

    <span class="hljs-keyword">const</span> sub1 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">update</span>());

    <span class="hljs-keyword">const</span> sub2 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">isChartHorizontal</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (v) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;horizontal&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;none&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;vertical&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;none&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;time&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      }
    });

    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span> = [sub1, sub2];
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnDestroy</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">sub</span> =&gt;</span> sub.<span class="hljs-title function_">unsubscribe</span>());
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// @ts-ignore</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>({
      <span class="hljs-attr">data</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>().<span class="hljs-property">axisX</span>.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;number&#x27;</span> ?
        [<span class="hljs-title function_">kruiChartRdmNumberStackData</span>(<span class="hljs-number">10</span>), <span class="hljs-title function_">kruiChartRdmNumberStackData</span>(<span class="hljs-number">10</span>)] :
        [
          <span class="hljs-title function_">kruiChartRandomDateStackArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
          <span class="hljs-title function_">kruiChartRandomDateStackArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
        ],
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    }));
  }
}
`,
	'range-bar-charts/chart-range-bar-update/chart-range-bar-update.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
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
      [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[&#x27;rgb(45, 141, 237)&#x27;]&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;4&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021]&quot;</span>
      [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;&#x27;rgba(45, 141, 237,0.5)&#x27;&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;cyan&#x27;, &#x27;blue&#x27;]&quot;</span>
      [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;[data, data2]&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartRangeBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'range-bar-charts/chart-range-bar-update/chart-range-bar-update.component.scss': ``,	'range-bar-charts/chart-range-bar-update/chart-range-bar-update.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRandomValue, kruiChartRangeBarMock1, kruiChartRangeBarMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-range-bar-update&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-range-bar-update.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-range-bar-update.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartRangeBarUpdateComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartRangeBarMock2;
  <span class="hljs-keyword">public</span> data2 = kruiChartRangeBarMock1;

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [
      ...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, [<span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)], <span class="hljs-string">&#x27;&#x27;</span>],
    ];
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span> = [
      ...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>, [<span class="hljs-variable language_">this</span>.<span class="hljs-property">data2</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>, [<span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">100</span>)], <span class="hljs-string">&#x27;&#x27;</span>],
    ];
  }
}
`,
	'select/select-simple-example/select-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-field&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-select</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of options&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>
      {{ option }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
`,	'select/select-simple-example/select-simple-example.scss': `<span class="hljs-selector-class">.example-field</span> {
  <span class="hljs-attribute">min-width</span>: <span class="hljs-number">250px</span>;
}
`,	'select/select-simple-example/select-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент  */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;select-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./select-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./select-simple-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectSimpleExample</span> {
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">options</span>: <span class="hljs-built_in">string</span>[] = [
    <span class="hljs-string">&#x27;АИ-92&#x27;</span>,
    <span class="hljs-string">&#x27;АИ-95&#x27;</span>,
    <span class="hljs-string">&#x27;AИ-100&#x27;</span>,
  ];
}
`,
	'slider/slider-simple-example/slider-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
`,	'slider/slider-simple-example/slider-simple-example.scss': `krui-slider {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
}
`,	'slider/slider-simple-example/slider-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;slider-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./slider-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./slider-simple-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SliderSimpleComponent</span> {
}
`,
	'spinner/spinner-simple-example/spinner-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-spinner</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-spinner</span>&gt;</span>
`,	'spinner/spinner-simple-example/spinner-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;spinner-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./spinner-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SpinnerSimpleComponent</span> {
}
`,
	'stack-bar-charts/chart-full-stack-bar/chart-full-stack-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;8&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2021,2022,2023]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-2)&#x27;, &#x27;var(--color-additional-5)&#x27;, &#x27;var(--color-additional-7)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;bottom&#x27;&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;&#x27;fullStackBar&#x27;&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartStackBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'stack-bar-charts/chart-full-stack-bar/chart-full-stack-bar.component.scss': ``,	'stack-bar-charts/chart-full-stack-bar/chart-full-stack-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartStackBarMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> full stack */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-full-stack-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-full-stack-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-full-stack-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartFullStackBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock2;
}
`,
	'stack-bar-charts/chart-horizontal-full-stack-bar/chart-horizontal-full-stack-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;8&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2021,2022,2023]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-4)&#x27;, &#x27;var(--color-additional-9)&#x27;, &#x27;var(--color-additional-11)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;&#x27;fullStackBar&#x27;&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalStackBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'stack-bar-charts/chart-horizontal-full-stack-bar/chart-horizontal-full-stack-bar.component.scss': ``,	'stack-bar-charts/chart-horizontal-full-stack-bar/chart-horizontal-full-stack-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartStackBarMock2 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Горизонтальный */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-horizontal-full-stack-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-horizontal-full-stack-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-horizontal-full-stack-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartHorizontalFullStackBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock2;
}
`,
	'stack-bar-charts/chart-horizontal-stack-bar/chart-horizontal-stack-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;none&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;12&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-5)&#x27;, &#x27;var(--color-additional-12)&#x27;, &#x27;var(--color-additional-14)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;&#x27;stackBar&#x27;&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalStackBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'stack-bar-charts/chart-horizontal-stack-bar/chart-horizontal-stack-bar.component.scss': ``,	'stack-bar-charts/chart-horizontal-stack-bar/chart-horizontal-stack-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartStackBarMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Горизонтальный */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-horizontal-stack-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-horizontal-stack-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-horizontal-stack-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartHorizontalStackBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock1;
}
`,
	'stack-bar-charts/chart-horizontal-stack-bar-update/chart-horizontal-stack-bar-update.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;&#x27;horizontal&#x27;&quot;</span>
            [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
            [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span>
            [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;&#x27;horizontal-line&#x27;&quot;</span>
            [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;12&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-6)&#x27;, &#x27;var(--color-additional-8)&#x27;, &#x27;var(--color-additional-1)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;&#x27;stackBar&#x27;&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      <span class="hljs-attr">kruiChartHorizontalStackBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;update-button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span> Обновить данные<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'stack-bar-charts/chart-horizontal-stack-bar-update/chart-horizontal-stack-bar-update.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">640px</span>;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
}
`,	'stack-bar-charts/chart-horizontal-stack-bar-update/chart-horizontal-stack-bar-update.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRandomValue, kruiChartStackBarMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Обновление данных */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-horizontal-stack-bar-update&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-horizontal-stack-bar-update.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-horizontal-stack-bar-update.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartHorizontalStackBarUpdateComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock1;

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [
      ...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>,
        [<span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">50</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">50</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">50</span>)],
        <span class="hljs-string">&#x27;&#x27;</span>,
      ],
    ];
  }
}
`,
	'stack-bar-charts/chart-setting-stack-bar/chart-setting-stack-bar.component.html': `@if ((options | async); as chartOptions) {
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span>
    [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span>
    [<span class="hljs-attr">setDefIfContainerSizeInvalid</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">bgColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.bgColor&quot;</span>
    [<span class="hljs-attr">borderColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderColor&quot;</span>
    [<span class="hljs-attr">borderRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.borderRadius&quot;</span>
    [<span class="hljs-attr">chartOrientation</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.chartOrientation&quot;</span>
    [<span class="hljs-attr">legendAxis</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendAxis&quot;</span>
    [<span class="hljs-attr">legendLayer</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendLayer&quot;</span>
    [<span class="hljs-attr">legendPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendPosition&quot;</span>
    [<span class="hljs-attr">legendTrend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendTrend&quot;</span>
    [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legendType&quot;</span>
    [<span class="hljs-attr">legend</span>]=<span class="hljs-string">&quot;chartOptions.view?.legend?.legend&quot;</span>
    [<span class="hljs-attr">marginBottom</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginBottom&quot;</span>
    [<span class="hljs-attr">marginLeft</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginLeft&quot;</span>
    [<span class="hljs-attr">marginRight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginRight&quot;</span>
    [<span class="hljs-attr">marginTop</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.marginTop&quot;</span>
    [<span class="hljs-attr">resizeObserveType</span>]=<span class="hljs-string">&quot;chartOptions.view?.resizeObserveType&quot;</span>
    [<span class="hljs-attr">smartScrollEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollEnable&quot;</span>
    [<span class="hljs-attr">smartScrollHeight</span>]=<span class="hljs-string">&quot;chartOptions.view?.wrapper?.smartScrollHeight&quot;</span>
    [<span class="hljs-attr">toolbarJustifyContent</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarJustifyContent&quot;</span>
    [<span class="hljs-attr">toolbarPosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbarPosition&quot;</span>
    [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;chartOptions.view?.toolbar?.toolbar&quot;</span>
    [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipColor&quot;</span>
    [<span class="hljs-attr">tooltipMarkerCrossSize</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerCrossSize&quot;</span>
    [<span class="hljs-attr">tooltipMarkerType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipMarkerType&quot;</span>
    [<span class="hljs-attr">tooltipShowMilliseconds</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipShowMilliseconds&quot;</span>
    [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipType&quot;</span>
    [<span class="hljs-attr">tooltipWidth</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltipWidth&quot;</span>
    [<span class="hljs-attr">tooltip</span>]=<span class="hljs-string">&quot;chartOptions.view?.tooltip?.tooltip&quot;</span>
    [<span class="hljs-attr">zoomType</span>]=<span class="hljs-string">&quot;chartOptions.view?.zoomType&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>
      [<span class="hljs-attr">layerTitle</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.layerTitle&quot;</span>
      [<span class="hljs-attr">tooltipColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipColor&quot;</span>
      [<span class="hljs-attr">tooltipEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.tooltipEnable&quot;</span>
      [<span class="hljs-attr">zoomPrimaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomPrimaryEnable&quot;</span>
      [<span class="hljs-attr">zoomSecondaryEnable</span>]=<span class="hljs-string">&quot;chartOptions.view?.layer?.zoomSecondaryEnable&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisX?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.color&quot;</span>
        [<span class="hljs-attr">drawAxisLabelLine</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabelLine&quot;</span>
        [<span class="hljs-attr">drawAxisLabel</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.drawAxisLabel&quot;</span>
        [<span class="hljs-attr">fontColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.fontColor&quot;</span>
        [<span class="hljs-attr">position</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.position&quot;</span>
        [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.primary&quot;</span>
        [<span class="hljs-attr">ticks</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.ticks&quot;</span>
        [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;chartOptions.view?.axisY?.type&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridX?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span>
        [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.color&quot;</span>
        [<span class="hljs-attr">drawGrid</span>]=<span class="hljs-string">&quot;chartOptions.view?.gridY?.drawGrid&quot;</span>
        <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>


      @if (isChartHorizontal.value) {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;, &#x27;Тестовый пример 2&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;bgColor&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[bgColor, bgColor2]&quot;</span>
          [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[brColor, brColor2]&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config.stackType&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartHorizontalStackBar</span>
        &gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      } @else {
        <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
          [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[&#x27;Тестовый пример&#x27;, &#x27;Тестовый пример 2&#x27;]&quot;</span>
          [<span class="hljs-attr">data</span>]=<span class="hljs-string">&quot;chartOptions.data&quot;</span>
          [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;bgColor&quot;</span>
          [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[bgColor, bgColor2]&quot;</span>
          [<span class="hljs-attr">barBorderColors</span>]=<span class="hljs-string">&quot;[brColor, brColor2]&quot;</span>
          [<span class="hljs-attr">barOpacity</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barOpacity&quot;</span>
          [<span class="hljs-attr">animationType</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.animationType&quot;</span>
          [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.animation&quot;</span>
          [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barBorder&quot;</span>
          [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barRadius&quot;</span>
          [<span class="hljs-attr">barType</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barType&quot;</span>
          [<span class="hljs-attr">barWidthPercent</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.barWidthPercent&quot;</span>
          [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config.stackType&quot;</span>
          [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.durationAnimation&quot;</span>
          [<span class="hljs-attr">durationToggleAnimation</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.durationToggleAnimation&quot;</span>
          [<span class="hljs-attr">reRangeThenDataChange</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.reRangeThenDataChange&quot;</span>
          [<span class="hljs-attr">reRangeThenLegendClick</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.reRangeThenLegendClick&quot;</span>
          [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.showEnumValues&quot;</span>
          [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.showValues&quot;</span>
          [<span class="hljs-attr">tooltipHoverColor</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.tooltipHoverColor&quot;</span>
          [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.tooltipHoverEffect&quot;</span>
          [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.config?.valuePosition&quot;</span>
          [<span class="hljs-attr">valuesFontSizePx</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.valuesFontSizePx&quot;</span>
          [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;chartOptions.view?.stackBarLayer?.common?.workgroundPadding&quot;</span>
          <span class="hljs-attr">kruiChartStackBar</span>
        &gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
}

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__chart-toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Вертикальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span>
      [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;isChartHorizontal&quot;</span>
      [<span class="hljs-attr">iconOff</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartGantt&#x27;&quot;</span>
      [<span class="hljs-attr">iconOn</span>]=<span class="hljs-string">&quot;&#x27;kruiIconChartColumns&#x27;&quot;</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;chart-orientation-toggle&quot;</span>&gt;</span> Горизонтальный <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__color-toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;bgColor&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;brColor&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;bgColor2&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;brColor2&quot;</span>
          <span class="hljs-attr">kruiInput</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">krui-accordion</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;optionsForm&quot;</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container__accordion&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;График&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет фона<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;bgColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет границы<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;borderColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Смарт-скролл
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет смарт-скролла<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;smartScrollColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Тоолтип&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Тултип<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipShowMilliseconds&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать миллисекунды<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;fullLine&#x27;, &#x27;dataPoint&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Маркер тултипа<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;line&#x27;, &#x27;horizontal-line&#x27;, &#x27;smallCross&#x27;, &#x27;fullscreenCross&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет маркера<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          [<span class="hljs-attr">class.krui-disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.tooltip.controls.tooltipMarkerType.value !== &#x27;smallCross&#x27;&quot;</span>
          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>
        &gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер маркера<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipMarkerCrossSize&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Толщина линии<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipWidth&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Панель управления&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;toolbar&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbar&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Панель управления<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarPosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Выравнивание<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;toolbarJustifyContent&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span>
                *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;
                  let option of [&#x27;center&#x27;, &#x27;flex-start&#x27;, &#x27;flex-end&#x27;, &#x27;space-between&#x27;, &#x27;space-around&#x27;, &#x27;space-evenly&#x27;]
                &quot;</span>
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Легенда&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;legend&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Легенда<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendLayer&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки слоя
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span>
            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;optionsForm.controls.legend.controls.legendType.value === &#x27;simple-style&#x27;&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendAxis&quot;</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки осей
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendTrend&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Метки трендов и столбцов
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип легенды<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;default&#x27;, &#x27;simple-style&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;legendPosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Зум&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;layer&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomPrimaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси х<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomSecondaryEnable&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Зум по оси y<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип зума<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;zoomType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;none&#x27;, &#x27;brush&#x27;, &#x27;scroll&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Х&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси х<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;top&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridX&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Ось Y&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;axisY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип оси у<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;time&#x27;, &#x27;number&#x27;, &#x27;enum&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Позиция<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;position&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;left&#x27;, &#x27;right&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-disabled&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Главная ось<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabel&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawAxisLabelLine&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать метки значений<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет Оси<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;fontColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Количество меток<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;10&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;2&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;ticks&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;gridY&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;drawGrid&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Отображать сетку<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет значений сетки<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;color&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;stackBarLayer&quot;</span> <span class="hljs-attr">kruiAccordionItem</span>=<span class="hljs-string">&quot;Стековый столбец&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;config&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип анимации<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animationType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;growth&#x27;, &#x27;none&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Тип столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;stackType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;stackBar&#x27;, &#x27;fullStackBar&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Заливка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barType&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;gradient&#x27;, &#x27;solidColor&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Ширина столбца, %<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barWidthPercent&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Скругление столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;20&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barRadius&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barBorder&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Обводка столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Прозрачность<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;0.1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;barOpacity&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverEffect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Эффект наведения курсора<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Цвет эффекта наведения<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;color-select&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
              <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;tooltipHoverColor&quot;</span>
              <span class="hljs-attr">kruiChartInputColorWrapper</span>
              <span class="hljs-attr">kruiInput</span>
              <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;color&quot;</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Положение значений<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-form-field</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuePosition&quot;</span> <span class="hljs-attr">kruiInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let option of [&#x27;over&#x27;, &#x27;top&#x27;, &#x27;center&#x27;, &#x27;bottom&#x27;]&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-form-field</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showEnumValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать расчетные значения<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;startInNull&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Начинать с нуля<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-delimeter&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content&quot;</span> <span class="hljs-attr">formGroupName</span>=<span class="hljs-string">&quot;common&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;showValues&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать значения столбцов<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Размер значений точек, пх<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;18&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;valuesFontSizePx&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;animation&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Показывать анимацию<span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации отрисовки<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Длительность анимации переключения<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
            [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
            [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
            [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;100&quot;</span>
            [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;100&quot;</span>
            <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;durationToggleAnimation&quot;</span>
          &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenDataChange&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при изменение значений
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tab-content__item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">krui-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reRangeThenLegendClick&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
          &gt;</span>Перестраивать при клике на легенду
          <span class="hljs-tag">&lt;/<span class="hljs-name">krui-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">kruiBtnIcon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'stack-bar-charts/chart-setting-stack-bar/chart-setting-stack-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}


<span class="hljs-selector-class">.button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
}

<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">box-sizing</span>: border-box;

  &amp;__color-toggle {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;

    <span class="hljs-selector-class">.color-item</span> {
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">align-items</span>: center;

      krui-<span class="hljs-selector-tag">form</span>-field {
        <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
      }
    }
  }

  &amp;__accordion {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;

    <span class="hljs-selector-class">.tab-content</span> {
      <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;
      <span class="hljs-attribute">box-sizing</span>: border-box;
      <span class="hljs-attribute">display</span>: flex;
      <span class="hljs-attribute">flex-direction</span>: column;
      <span class="hljs-attribute">gap</span>: <span class="hljs-number">5px</span>;

      &amp;__item {
        <span class="hljs-attribute">display</span>: flex;
        <span class="hljs-attribute">gap</span>: <span class="hljs-number">15px</span>;
        <span class="hljs-attribute">align-items</span>: center;
        <span class="hljs-attribute">justify-content</span>: space-between;

        <span class="hljs-selector-class">.color-select</span> {
          <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
        }
      }
    }

    hr<span class="hljs-selector-class">.tab-delimeter</span> {
      <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-and-icons-stroke-shape);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">96%</span>;
    }
  }

}
`,	'stack-bar-charts/chart-setting-stack-bar/chart-setting-stack-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">Inject</span>, <span class="hljs-title class_">OnDestroy</span>, <span class="hljs-title class_">OnInit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Subscription</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;
<span class="hljs-keyword">import</span> { debounceTime } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs/operators&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>,
  <span class="hljs-title class_">IKruiOptionsFormType</span>,
  <span class="hljs-variable constant_">KRUI_CHART_FORM_CREATE_SERVICE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>,
  <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>,
  <span class="hljs-title class_">KruiChartFormCreateService</span>,
  kruiChartRandomDateArray,
  kruiChartRdmNumberData,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Настройки */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-setting-stack-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-setting-stack-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-setting-stack-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartSettingStackBarComponent</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">OnInit</span>, <span class="hljs-title class_">OnDestroy</span> {
  <span class="hljs-keyword">public</span> interpolation = <span class="hljs-variable constant_">KRUI_CHART_LINE_INTERPOLATE</span>;
  <span class="hljs-keyword">public</span> markers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS</span>;
  <span class="hljs-keyword">public</span> dataMarkers = <span class="hljs-variable constant_">KRUI_CHART_POINT_MARKERS_CONFIG</span>;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">optionsForm</span>: <span class="hljs-title class_">IKruiOptionsFormType</span>;
  <span class="hljs-keyword">public</span> isChartHorizontal = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">public</span> bgColor = <span class="hljs-string">&#x27;#8FBC8F&#x27;</span>;
  <span class="hljs-keyword">public</span> brColor = <span class="hljs-string">&#x27;#E9967A&#x27;</span>;
  <span class="hljs-keyword">public</span> brColor2 = <span class="hljs-string">&#x27;#2F4F4F&#x27;</span>;
  <span class="hljs-keyword">public</span> bgColor2 = <span class="hljs-string">&#x27;#483D8B&#x27;</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">BehaviorSubject</span>&lt;{
    <span class="hljs-attr">data</span>: [<span class="hljs-built_in">any</span>, <span class="hljs-built_in">number</span>, <span class="hljs-built_in">any</span>][][]; <span class="hljs-attr">view</span>: <span class="hljs-title class_">IKruiChartSingleLayerInputModel</span>;
  }&gt; | <span class="hljs-literal">undefined</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-attr">subscription</span>: <span class="hljs-title class_">Subscription</span>[] = [];

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-meta">@Inject</span>(KRUI_CHART_FORM_CREATE_SERVICE) <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">formCreateService</span>: <span class="hljs-title class_">KruiChartFormCreateService</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">formCreateService</span>.<span class="hljs-title function_">createSettingFormDefault</span>();
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnInit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>({
      <span class="hljs-attr">data</span>: [
        <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
        <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
      ],
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    });
    <span class="hljs-keyword">const</span> sub1 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">update</span>());

    <span class="hljs-keyword">const</span> sub2 = <span class="hljs-variable language_">this</span>.<span class="hljs-property">isChartHorizontal</span>.<span class="hljs-property">valueChanges</span>.<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">debounceTime</span>(<span class="hljs-number">300</span>)).<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (v) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;horizontal&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;horizontal-line&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">patchValue</span>({
          <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">chartOrientation</span>: <span class="hljs-string">&#x27;vertical&#x27;</span>, <span class="hljs-attr">tooltipMarkerType</span>: <span class="hljs-string">&#x27;line&#x27;</span> },
          <span class="hljs-attr">axisX</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;time&#x27;</span> },
          <span class="hljs-attr">axisY</span>: { <span class="hljs-attr">primary</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span> },
        });
      }
    });

    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span> = [sub1, sub2];
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">ngOnDestroy</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">subscription</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">sub</span> =&gt;</span> sub.<span class="hljs-title function_">unsubscribe</span>());
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// @ts-ignore</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">options</span>!.<span class="hljs-title function_">next</span>({
      <span class="hljs-attr">data</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>().<span class="hljs-property">axisX</span>.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;number&#x27;</span> ?
        [<span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>), <span class="hljs-title function_">kruiChartRdmNumberData</span>(<span class="hljs-number">10</span>)] :
        [
          <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
          <span class="hljs-title function_">kruiChartRandomDateArray</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2022-09-01T00:00:00.0000000Z&#x27;</span>)),
        ],
      <span class="hljs-attr">view</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">optionsForm</span>.<span class="hljs-title function_">getRawValue</span>(),
    }));
  }
}
`,
	'stack-bar-charts/chart-stack-bar/chart-stack-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;12&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-3)&#x27;, &#x27;var(--color-additional-8)&#x27;, &#x27;var(--color-additional-10)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;&#x27;stackBar&#x27;&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartStackBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'stack-bar-charts/chart-stack-bar/chart-stack-bar.component.scss': ``,	'stack-bar-charts/chart-stack-bar/chart-stack-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartStackBarMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-stack-bar&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-stack-bar.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-stack-bar.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartStackBarComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock1;
}
`,
	'stack-bar-charts/chart-stack-bar-animation/chart-stack-bar-animation.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barBorder</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;12&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2020,2021,2022]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-17)&#x27;, &#x27;var(--color-additional-15)&#x27;, &#x27;var(--color-additional-16)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;center&#x27;&quot;</span>
      [<span class="hljs-attr">tooltipHoverEffect</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;&#x27;stackBar&#x27;&quot;</span>
      [<span class="hljs-attr">durationAnimation</span>]=<span class="hljs-string">&quot;durationAnimation&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartStackBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;settings&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span>Длина анимации<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-slider</span>
      [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;durationAnimation&quot;</span>
      [<span class="hljs-attr">inputs</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">labels</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;5000&quot;</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;1000&quot;</span>
      [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;200&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;update()&quot;</span> <span class="hljs-attr">kruiButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">svg-icon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;kruiIconReloadCycle&quot;</span> <span class="hljs-attr">kruiBtnIcon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'stack-bar-charts/chart-stack-bar-animation/chart-stack-bar-animation.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
}

<span class="hljs-selector-class">.settings</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: auto auto auto;
  <span class="hljs-attribute">grid-column</span>-<span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">20px</span>;

  <span class="hljs-selector-class">.item</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-direction</span>: column;
  }
}
`,	'stack-bar-charts/chart-stack-bar-animation/chart-stack-bar-animation.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartRandomValue, kruiChartStackBarMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Анимация */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-stack-bar-animation&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-stack-bar-animation.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-stack-bar-animation.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartStackBarAnimationComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock1;
  <span class="hljs-keyword">public</span> <span class="hljs-attr">durationAnimation</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">2000</span>;

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">update</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span> = [
      ...<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>, [
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>,
        [<span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">40</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">40</span>), <span class="hljs-title function_">kruiChartRandomValue</span>(<span class="hljs-number">10</span>, <span class="hljs-number">40</span>)],
        <span class="hljs-string">&#x27;&#x27;</span>,
      ],
    ];
  }
}
`,
	'stack-bar-charts/chart-stack-bar-enum/chart-stack-bar-enum.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;dataPoint&#x27;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-layer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">primary</span>]=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;x&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;enum&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-axis</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;y&quot;</span>
      <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-axis</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-grid</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-grid</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">krui-chart-data-layer</span>
      [<span class="hljs-attr">animation</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">barRadius</span>]=<span class="hljs-string">&quot;1&quot;</span>
      [<span class="hljs-attr">captions</span>]=<span class="hljs-string">&quot;[2018,2019,2020]&quot;</span>
      [<span class="hljs-attr">colors</span>]=<span class="hljs-string">&quot;[&#x27;var(--color-additional-1)&#x27;, &#x27;var(--color-additional-4)&#x27;, &#x27;var(--color-additional-8)&#x27;]&quot;</span>
      [<span class="hljs-attr">dataStack</span>]=<span class="hljs-string">&quot;data&quot;</span>
      [<span class="hljs-attr">showValues</span>]=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">showEnumValues</span>]=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">valuePosition</span>]=<span class="hljs-string">&quot;&#x27;top&#x27;&quot;</span>
      [<span class="hljs-attr">stackType</span>]=<span class="hljs-string">&quot;&#x27;stackBar&#x27;&quot;</span>
      [<span class="hljs-attr">workgroundPadding</span>]=<span class="hljs-string">&quot;{
        top: 5,
        right: 15,
        bottom: 0,
        left: 15
      }&quot;</span>
      <span class="hljs-attr">kruiChartStackBar</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-data-layer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart-layer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">krui-chart</span>&gt;</span>
`,	'stack-bar-charts/chart-stack-bar-enum/chart-stack-bar-enum.component.scss': ``,	'stack-bar-charts/chart-stack-bar-enum/chart-stack-bar-enum.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { kruiChartStackBarMock1 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Enum */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;chart-stack-bar-enum&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./chart-stack-bar-enum.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./chart-stack-bar-enum.component.scss&#x27;</span>],
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChartStackBarEnumComponent</span> {
  <span class="hljs-keyword">public</span> data = kruiChartStackBarMock1;
}
`,
	'tabs/tabs-simple-example/lorem.ts': `<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> russian = <span class="hljs-string">&#39;
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
`,	'tabs/tabs-simple-example/tabs-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-tabs</span>&gt;</span>
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
`,	'tabs/tabs-simple-example/tabs-simple-example.scss': `<span class="hljs-selector-class">.example-tab-content</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">8px</span> <span class="hljs-number">0</span>;
  <span class="hljs-selector-tag">text</span>-align: justify;
}
`,	'tabs/tabs-simple-example/tabs-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">import</span> { french, english, russian } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./lorem&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый компонент */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;tabs-simple-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./tabs-simple-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./tabs-simple-example.scss&#x27;</span>,
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsSimpleExample</span> {
  <span class="hljs-keyword">readonly</span> russian = russian;
  <span class="hljs-keyword">readonly</span> english = english;
  <span class="hljs-keyword">readonly</span> french = french;
}
`,
	'toggle/toggle-simple-example/toggle-simple-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
`,	'toggle/toggle-simple-example/toggle-simple-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

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
	'toggle/toggle-size-example/toggle-size-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-sm-toggle&quot;</span>&gt;</span>sm<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-sm-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-md-toggle&quot;</span>&gt;</span>md<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-md-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-lg-toggle&quot;</span>&gt;</span>lg<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-lg-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;krui-form-field-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;example-xlg-toggle&quot;</span>&gt;</span>xlg<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">krui-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xlg&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-xlg-toggle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">krui-toggle</span>&gt;</span>
`,	'toggle/toggle-size-example/toggle-size-example.scss': `<span class="hljs-selector-tag">label</span> {
  <span class="hljs-attribute">display</span>: block;
}

tlui-toggle {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">8px</span>;
}
`,	'toggle/toggle-size-example/toggle-size-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Размеры */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;toggle-size-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./toggle-size-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./toggle-size-example.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToggleSizeExample</span> {}
`,
	'tooltip/sides-small-example/sides-small-example.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters1&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>
  &gt;</span>Сверху<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters2&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>&gt;</span>
    Слева
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>&gt;</span>
    Справа
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters4&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>&gt;</span>
    Снизу
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipDisabled</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters4&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>&gt;</span>
    Disabled
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'tooltip/sides-small-example/sides-small-example.component.scss': `<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--color-background-body);
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">15px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">30px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-text-signatures);
  <span class="hljs-attribute">display</span>: inline-block;
}
`,	'tooltip/sides-small-example/sides-small-example.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiTooltipParameters</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Базовый */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;sides-small-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./sides-small-example.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./sides-small-example.component.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SidesSmallExampleComponent</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-attr">tooltipParameters1</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;top&#x27;</span>,
  };
  <span class="hljs-keyword">public</span> <span class="hljs-attr">tooltipParameters2</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
  };
  <span class="hljs-keyword">public</span> <span class="hljs-attr">tooltipParameters3</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;right&#x27;</span>,
  };
  <span class="hljs-keyword">public</span> <span class="hljs-attr">tooltipParameters4</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;bottom&#x27;</span>,
  };

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
  }
}
`,
	'tooltip/sides-small-template-example/sides-small-template-example.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">templateRef</span>]=<span class="hljs-string">&quot;defaultCell&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTemplateTooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>
  &gt;</span>Сверху<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">templateRef</span>]=<span class="hljs-string">&quot;defaultCell&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTemplateTooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
    Слева
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">templateRef</span>]=<span class="hljs-string">&quot;defaultCell&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTemplateTooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    Справа
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">templateRef</span>]=<span class="hljs-string">&quot;defaultCell&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTemplateTooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
    Снизу
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">defaultCell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;table-container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">table</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;good&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
`,	'tooltip/sides-small-template-example/sides-small-template-example.component.scss': `<span class="hljs-keyword">@import</span> <span class="hljs-string">&quot;../../../../../ui/styles/packages/utils/tooltip&quot;</span>;

<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-keyword">@include</span> tooltip();
}

<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--color-background-app-header);
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">15px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">30px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-text-signatures);
  <span class="hljs-attribute">display</span>: inline-block;
}

<span class="hljs-selector-class">.table-container</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">3px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  <span class="hljs-attribute">border-collapse</span>: collapse;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-borders-light);
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--color-borders-icons);
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">4px</span> <span class="hljs-number">9px</span> <span class="hljs-built_in">rgba</span>(<span class="hljs-number">93</span>, <span class="hljs-number">117</span>, <span class="hljs-number">147</span>, <span class="hljs-number">0.110</span>);
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-selector-tag">line</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">15px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-main);
}

<span class="hljs-selector-tag">span</span><span class="hljs-selector-class">.good</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-index-green);
}
`,	'tooltip/sides-small-template-example/sides-small-template-example.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Шаблон */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;sides-small-template-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./sides-small-template-example.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./sides-small-template-example.component.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SidesSmallTemplateExampleComponent</span> {
}
`,
	'tooltip/title-example/title-example.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters1&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>
  &gt;</span>Сверху<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters2&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>&gt;</span>
    Слева
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>&gt;</span>
    Справа
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> [<span class="hljs-attr">tooltipParameters</span>]=<span class="hljs-string">&quot;tooltipParameters4&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">kruiTooltip</span>&gt;</span>
    Снизу
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,	'tooltip/title-example/title-example.component.scss': `<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--color-background-body);
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">15px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--color-text-contrast);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">30px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--color-text-signatures);
  <span class="hljs-attribute">display</span>: inline-block;
}
`,	'tooltip/title-example/title-example.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">KruiTooltipParameters</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@kr-platform/ui&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Заголовок */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;title-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./title-example.component.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./title-example.component.scss&#x27;</span>],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TitleExampleComponent</span> {
  <span class="hljs-attr">tooltipParameters1</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;top&#x27;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;412&#x27;</span>,
    <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;21.09.2022 20:00&#x27;</span>,
  };
  <span class="hljs-attr">tooltipParameters2</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;412&#x27;</span>,
    <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;21.09.2022 20:00&#x27;</span>,
  };
  <span class="hljs-attr">tooltipParameters3</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;right&#x27;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;412&#x27;</span>,
    <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;21.09.2022 20:00&#x27;</span>,
  };
  <span class="hljs-attr">tooltipParameters4</span>: <span class="hljs-title class_">KruiTooltipParameters</span> = {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;text&#x27;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;bottom&#x27;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;412&#x27;</span>,
    <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;21.09.2022 20:00&#x27;</span>,
  };
}
`,
	'typography/typography-header-example/typography-header-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1. Заголовок<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>h2. Заголовок<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>h3. Заголовок<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>h4. Заголовок<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>h5. Заголовок<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
`,	'typography/typography-header-example/typography-header-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Заголовок */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;typography-header-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./typography-header-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TypographyHeaderExample</span> {}
`,
	'typography/typography-link-example/typography-link-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;javascript:&quot;</span>&gt;</span>Ссылка<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
`,	'typography/typography-link-example/typography-link-example.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ChangeDetectionStrategy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-comment">/** <span class="hljs-doctag">@title</span> Ссылка */</span>

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;typography-link-example&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./typography-link-example.html&#x27;</span>,
  <span class="hljs-attr">styleUrls</span>: [],
  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TypographyLinkExample</span> {}
`
};