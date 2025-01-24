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
`
};