goog.provide('audion.render.VisualGraphType');


/**
 * The visual graph refers to the graph displayed in the panel created by dev
 * tools. Nodes and edges in that graph carry data (on AudioNodes, web audio
 * graph edges, etc). This enumerates the different types of data.
 * Increment the following value upon adding a new entry:
 * Next available ID: 5
 * @enum {number}
 */
audion.render.VisualGraphType = {
  AUDIO_NODE: 1,
  AUDIO_PARAM_NODE: 2,
  NODE_TO_NODE_EDGE: 3,
  NODE_TO_AUDIO_PARAM_EDGE: 4
};