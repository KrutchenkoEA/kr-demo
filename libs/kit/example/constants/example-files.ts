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
	'bars/chart-simple-bar/chart-simple-bar.component.html': `<span class="hljs-tag">&lt;<span class="hljs-name">krui-chart</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;600&quot;</span> [<span class="hljs-attr">legendType</span>]=<span class="hljs-string">&quot;&#x27;simple-style&#x27;&quot;</span> [<span class="hljs-attr">toolbar</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">tooltipType</span>]=<span class="hljs-string">&quot;&#x27;fullLine&#x27;&quot;</span>&gt;</span>
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
`,	'bars/chart-simple-bar/chart-simple-bar.component.scss': `<span class="hljs-selector-pseudo">:host</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
}
`,	'bars/chart-simple-bar/chart-simple-bar.component.ts': `<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
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
	'button/button-size-example/button-size-example.html': `<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xlg&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>Middle<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">kruiButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
`,	'button/button-size-example/button-size-example.scss': `<span class="hljs-selector-tag">button</span> {
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
`,	'button/button-style-example/button-style-example.scss': `<span class="hljs-selector-tag">button</span> {
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