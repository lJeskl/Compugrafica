
var gEngine = gEngine || { };

gEngine.DefaultResources = (function () {
    // Simple Shader
    var kSimpleVS = "src/GLSLShaders/SimpleVS.glsl";  // Path to the VertexShader 
    var kSimpleFS = "src/GLSLShaders/SimpleFS.glsl";  // Path to the simple FragmentShader

    var mConstColorShader = null;

    var getConstColorShader = function () { return mConstColorShader; };

    var _createShaders = function (callBackFunction) {
        mConstColorShader = new SimpleShader(kSimpleVS, kSimpleFS);
        callBackFunction();
    };

    var initialize = function (callBackFunction) {
        // constant color shader: SimpleVS, and SimpleFS
        gEngine.TextFileLoader.loadTextFile(kSimpleVS, gEngine.TextFileLoader.eTextFileType.eTextFile);
        gEngine.TextFileLoader.loadTextFile(kSimpleFS, gEngine.TextFileLoader.eTextFileType.eTextFile);

        gEngine.ResourceMap.setLoadCompleteCallback(function () { _createShaders(callBackFunction); });
    };

    // Public interface for this object. Anything not in here will
    // not be accessable.
    var mPublic = {
        initialize: initialize,
        getConstColorShader: getConstColorShader
    };
    return mPublic;
}());