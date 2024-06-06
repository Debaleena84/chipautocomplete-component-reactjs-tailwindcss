<h3>Intro:</h3>
<h3>ChipAutoComplete Component</h3>
<p>This implementation is for a ChipAutoComplete component in React and TailwindCSS. A chip-like user-friendly element that can add, view, or remove chips with the autocomplete feature.</p>
<h3>Features:</h3>
<ul>
  <li>Dynamic Chip Creation: Type in the input box and press Enter to create a chip.</li>
  <li>Chip Removal: Press the 'x' to remove a chip.</li>
  <li>No Duplicate Chips: Do not allow the same chip to be added.</li>
  <li>List of Recommendations: Dynamic list of recommendations based on input.</li>
  <li>Highlight Matching Text: Highlight the text in the suggestion that is also part of the input.</li>
  <li>Keyboard Navigation: Navigate through suggestions by using the arrow keys.</li>
  <li>Clear All Chips: Clear all chips button.</li>
  <li>Chip Limit: Limit the number of chips that can be added to a maximum value (set to 10).</li>
  <li>Mobile Responsive: Component is responsive up to 400px width.</li>
  <li>Transition Animations: Beautiful transition animations for a great experience.</li>
</ul>
<h3>Implementation:</h3>
<ul>
  <li>Set up Component on Initialization</li>
  <ul>
    <li>Added basic structure of component ChipAutoComplete.</li>
    <li>Initiated the inputValue, chips, and suggestions.</li>
  </ul>
  <li>State Management and Input Change Handler</li>
  <ul>
    <li>Added handleInputChange to manage input changes and filter suggestions according to the change in input.</li>
  </ul>
  <li>Chip Creation on Enter Key</li>
  <ul>
    <li>Added handleKeyDown to create a chip when the Enter key is hit without adding duplicates.</li>
  </ul>
  <li>Chip Loading and Unloading</li>
  <ul>
    <li>The chips were displayed, and they could be removed by clicking the cross icon.</li>
  </ul>
  <li>Suggestions Dropdown and Click Handler</li>
  <ul>
    <li>Used a drop-down to view suggestions and applied a click handler so that on the click of a suggestion, the same would be added as a chip.</li>
  </ul>
  <li>Highlight Matching Text in Suggestions</li>
  <ul>
    <li>Added getHighlightedText to highlight the substring of the suggestion that is matched by the input.</li>
  </ul>
  <li>Keyboard Navigation</li>
  <ul>
    <li>Added keyboard navigation to the suggestions list, made available via arrow keys.</li>
  </ul>
  <li>Clear All Chips Button</li>
  <ul>
    <li>Added a 'Clear All' button to allow the user to clear all the chips in one action.</li>
  </ul>
  <li>Mobile Responsiveness</li>
  <ul>
    <li>Ensured the component responds up to 400px using TailwindCSS.</li>
  </ul>
  <li>Transition Animations</li>
  <ul>
    <li>Added a few smooth transitions and animations for the chip components to make the user experience just that much better.</li>
  </ul>
</ul>
