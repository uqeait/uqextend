var sComm = "<!-- Start Code Centre Element-->\n";
var eComm = "<!-- End Code Centre Element-->\n";
function generateImgTextCode() {
    //Retrive values and text from the user's input
    var imgPosition = $('input[name="imagePosition"]:checked').val();
    var imgWidth = $('input[name="imageWidth"]:checked').val();
    var imgVert = $('input[name="alignImgVert"]:checked').val();
    var txtVert = $('input[name="alignTextVert"]:checked').val();
    var imgBorder = $('input[name="imgBorder"]:checked').val();
    function toggleImgOnlyOn(){
        $('#imgTinyMCE, #imgWidth, #imgImgAlign, #imgTextAlign').addClass('d-none');
            }
    function toggleImgOnlyOff(){
        $('#imgTinyMCE, #imgWidth, #imgImgAlign, #imgTextAlign').addClass('show');
    }
    function imgOnlyOff(){
        if($('#imgTinyMCE').hasClass('d-none') == true){
            $('#imgTinyMCE, #imgWidth, #imgImgAlign, #imgTextAlign').removeClass('d-none');
            setTimeout(toggleImgOnlyOff, 300);
            secondImageOff();
        }
    }
    function secondImageOn(){
        $('#secondImageOptions').removeClass('d-none');
        setTimeout(function(){
        $('#secondImageOptions').addClass('show');
        },300)
    }
    function secondImageOff(){
        $('#secondImageOptions').removeClass('show');
        setTimeout(function(){
        $('#secondImageOptions').addClass('d-none');
        },300)
    }        
    //var tinyText = tinymce.activeEditor.getContent() + '\n';
    if(tinymce.get("tinyMCEimg").getContent() !==''){
        tinyTextimg = tinymce.get("tinyMCEimg").getContent() + '\n';
    }
    else if(imgPosition == 'floatRight' && tinymce.get("tinyMCEimg").getContent() ==''){
        tinyTextimg = '<p>This is a large amount of placeholder text that we have put in place to show you how the float right/text wrapping works.</p><p>You can see how once the length of the text down the page goes longer than the image on the right, the text will wrap around underneath the image.</p><p>If you only choose to have the image left or right, the text will not wrap around underneath the image. This is not to say that this is the best experience for every outcome. Sometimes using the vertical align for text or for the image is a better option (Align text or image vertically slightly further down the page on the left). So try out different combinations to see what works best for your context.</p><p>Also, if you click the full screen button below, this text may no longer wrap around. This is something to be aware of, that a lot of text is needed to exceed the length of an image and for wrapping to be a possible consideration for your context. The amount of text may not stretch past the image once in full screen mode with much more space for the text and the image.</p>'
    }
    else{
        tinyTextimg = textPlaceholder
    }
    
    var colImgOpen = '<div class="col-lg' + imgVert + '">\n';
    var colTxtOpen = '<div class="col-lg' + txtVert + '">\n';
    var col4ImgOpen = '<div class="col-lg-4' + imgVert + '">\n';
    var col3ImgOpen = '<div class="col-lg-3' + imgVert + '">\n';
    var headingText = $('#headingText').val();
    var headSize = $('input[name="headSize"]:checked').val();
    var imgLink = $('#imgLink').val();
    var imgLink2 = $('#imgLink2').val();
    if(imgLink !== ''){
        if(imgLink.includes('/static')){
            alert('You have used the studio link which will work with the code, and in Extend, but will not display here. If you want to see a genuine preview, go back to Extend and copy the Web link to the image')
        }
        else if(imgLink.includes('extend.uq.edu.au')){
            var findLastBackslash = imgLink.lastIndexOf('@');
            var result = imgLink.substring(findLastBackslash + 1);
            var result = '/static/' + result;
        }
        else{
            imgLink = imgLink;
        }
    }
    else{
        imgLink = imgPlaceholderLink
    }
    if(imgLink2 !== ''){
        if(imgLink2.includes('/static')){
            alert('You have used the studio link which will work with the code, and in Extend, but will not display here. If you want to see a genuine preview, go back to Extend and copy the Web link to the image')
        }
        else if(imgLink2.includes('extend.uq.edu.au')){
            var findLastBackslash2 = imgLink2.lastIndexOf('@');
            var result2 = imgLink2.substring(findLastBackslash2 + 1);
            var result2 = '/static/' + result2;
        }
        else{
            imgLink2 = imgLink2;
        }
    }
    else{
        imgLink2 = imgPlaceholderLink
    }  
    //If a person types in a heading, change the heading size to make it appear
        // Check if the textarea contains text
        $('#headingText').on('keyup', function() {
            // Check if the textarea contains text
            if ($(this).val().trim() !== '') {
          // Set the radio button with value 'h2' to checked
          $('input[type="radio"][value="img-h2"]').prop('checked', true);
        }
         else {
          // Set the radio button with value 'noH' to checked
          $('input[type="radio"][value="img-noH"]').prop('checked', true);
        }
      });  
    var altText = $('#altText').val();
    var altText2 = $('#altText2').val();
    var captionText = tinymce.get("tinyMCEcaption").getContent();
    var captionText2 = tinymce.get("tinyMCEcaption2").getContent();
    var imgPreviewCode = '<figure>\n<img class="img-fluid d-block mx-auto' + imgBorder + '" src="' + imgLink + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    var imgCode = '<figure>\n<img class="img-fluid d-block mx-auto' + imgBorder + '" src="' + result + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    var imgPreviewCode2 = '<figure>\n<img class="img-fluid d-block mx-auto' + imgBorder + '" src="' + imgLink2 + '" alt="' + altText2 + '" />\n<figcaption class="text-center mt-2">' + captionText2 + '</figcaption>\n</figure>\n';
    var imgCode2 = '<figure>\n<img class="img-fluid d-block mx-auto' + imgBorder + '" src="' + result2 + '" alt="' + altText2 + '" />\n<figcaption class="text-center mt-2">' + captionText2 + '</figcaption>\n</figure>\n';
    var imgPreviewFloat = '<figure>\n<img class="img-fluid" src="' + imgLink + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    var imgFloat = '<figure>\n<img class="img-fluid" src="' + result + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    if(headSize !== "img-noH"){
        //Resizing the heading text
        var sizes = {
            "img-noH": "",
            "img-h2": "<h2 class=\"text-bg-uq p-2\">" + headingText + "</h2>\n",
            "img-h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + headingText + "</h4>\n"
        }
        resizedHead = sizes[headSize];
    }
    else {
        resizedHead = "";
    } 
    const altTextInput = document.getElementById('altText');
    const copyCodeBtn = document.getElementById('imgCopyCodeBtn');

    copyCodeBtn.addEventListener('click', handleCopyClick);

    function handleCopyClick(event) {
      if (!altTextInput.value) {
        Swal.fire({
          icon: 'info',
          title: '<span class="fs-5 d-block mx-auto text-center">Accessibility info needed!</span>',
          text: 'Please provide an alt text for the image to improve accessibility before copying the code.'
        });
        return;
      }

      // Replace this line with your existing copyCode() function to copy the generated code
      copyCode(); // Pass the alt text as an argument

      Swal.fire({
        icon: 'success',
        title: 'Copied!',
        text: 'The code has been copied to your clipboard.'
      });
    }

    //Changing code order depending on selections
    if(imgPosition == "left" && imgWidth=="50"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + colImgOpen + imgCode + divClose + colTxtOpen + tinyTextimg  + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + colImgOpen + imgPreviewCode + divClose + colTxtOpen + tinyTextimg  + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "right" && imgWidth == "50"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + colImgOpen + imgCode + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + colImgOpen + imgPreviewCode + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "left" && imgWidth == "33"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + col4ImgOpen + imgCode + divClose + colTxtOpen + tinyTextimg  + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + col4ImgOpen + imgPreviewCode + divClose + colTxtOpen + tinyTextimg  + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);                
    }
    else if(imgPosition == "left" && imgWidth == "25"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + col3ImgOpen + imgCode + divClose + colTxtOpen + tinyTextimg  + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + col3ImgOpen + imgPreviewCode + divClose + colTxtOpen + tinyTextimg  + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "right" && imgWidth == "33"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + col4ImgOpen + imgCode + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + col4ImgOpen + imgPreviewCode + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "right" && imgWidth == "25"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + col3ImgOpen + imgCode + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + col3ImgOpen + imgPreviewCode + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "floatRight" && imgWidth =="50"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + colFloatOpen + imgFloat + divClose + tinyTextimg + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + colFloatOpen + imgPreviewFloat + divClose + tinyTextimg + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "floatRight" && imgWidth == "33"){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + col4FloatOpen + imgFloat + divClose + tinyTextimg + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + col4FloatOpen + imgPreviewFloat + divClose + tinyTextimg + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "floatRight" && imgWidth == "25" ){
        imgOnlyOff();
        var finalCode = sComm + resizedHead + rowOpen + col3FloatOpen + imgFloat + divClose + tinyTextimg + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + col3FloatOpen + imgPreviewFloat + divClose + tinyTextimg + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if(imgPosition == "imgOnly"){
        $('#imgTinyMCE, #imgWidth, #imgImgAlign, #imgTextAlign').removeClass('show');
        setTimeout(toggleImgOnlyOn, 300);
        secondImageOff();
        var finalCode = sComm + resizedHead + imgCode + eComm;
        var previewCode = sComm + resizedHead + imgPreviewCode + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
    else if (imgPosition == "imgSbS"){
        $('#imgTinyMCE, #imgWidth, #imgImgAlign, #imgTextAlign').removeClass('show');
        setTimeout(toggleImgOnlyOn, 300);
        secondImageOn();
        var finalCode = sComm + resizedHead + rowOpen + colOpen + imgCode + divClose + colOpen + imgCode2 + rowClose + eComm;
        var previewCode = sComm + resizedHead + rowOpen + colOpen + imgPreviewCode + divClose + colOpen + imgPreviewCode2 + rowClose + eComm;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(previewCode);
    }
}
function generateVidTextCode() {
    //Retrive values and text from the user's input
    var vidPosition = $('input[name="videoPosition"]:checked').val();
    var vidWidth = $('input[name="videoWidth"]:checked').val();
    // Get references to the textarea and button elements
    
    if(tinymce.get("tinyMCEvid").getContent() !==''){
        tinyTextvid = tinymce.get("tinyMCEvid").getContent() + '\n';
    }
    else{
        tinyTextvid = textPlaceholder
    }
    var vidHeadingText = $('#vidHeadingText').val();
    var vidHeadSize = $('input[name="vidHeadSize"]:checked').val();
    if(vidHeadingText != "" && vidHeadSize == "vid-h2-w"){
        vidHeadingText = ": " + vidHeadingText;
    }
    else{
        vidHeadingText = $('#vidHeadingText').val();
    }
    var vidLink = $('#vidLink').val();
    var vidLink2 = $('#vidLink2').val();
    if(vidLink !== ''){
        vidLink = vidLink;
    }
    else{
        vidLink = vidPlaceholderLink
    }
    //Change embed sources for video link 1
        var YTCode = '<iframe src="' + vidLink.replace('watch?v=','embed/') + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n';
        var YTCodeB = '<iframe src="' + vidLink.replace('youtu.be','youtube.com/embed') + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n';
        var KalturaCode = vidLink.replace('width="400" height="285" ', '') + '\n</div>'
        var VimeoCode = '<iframe src="' + vidLink.replace('vimeo.com','player.vimeo.com/video') + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>\n</iframe></div>\n<p class="text-center"><a href="' + vidLink + '" target="_blank" title="Watch this video on Vimeo">Watch this video on Vimeo</a></p>\n';
        var EchoCode = '<iframe allowfullscreen frameborder=0 src="' + vidLink + '?autoplay="false&automute=false"></iframe>\n';
        var TEDCode = '<iframe src="' + vidLink.replace('www.ted.com/talks/','embed.ted.com/talks/lang/en/') + '" frameborder="0" scrolling="no" allowfullscreen></iframe>';

    //Change embed sources for video link 2    
        var YTCode2 = '<iframe src="' + vidLink2.replace('watch?v=','embed/') + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n';
        var YTCodeB2 = '<iframe src="' + vidLink2.replace('youtu.be','youtube.com/embed') + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n';
        var KalturaCode2 = vidLink2.replace('width="400" height="285" ', '') + '\n</div>'
        var VimeoCode2 = '<iframe src="' + vidLink2.replace('vimeo.com','player.vimeo.com/video') + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>\n</iframe></div>\n<p class="text-center"><a href="' + vidLink2 + '" target="_blank" title="Watch this video on Vimeo">Watch this video on Vimeo</a></p>\n';
        var EchoCode2 = '<iframe allowfullscreen frameborder=0 src="' + vidLink2 + '?autoplay="false&automute=false"></iframe>\n</div>\n';
        var TEDCode2 = '<iframe src="' + vidLink2.replace('www.ted.com/talks/','embed.ted.com/talks/lang/en/') + '" frameborder="0" scrolling="no" allowfullscreen></iframe></div>\n';

        //Find video source for  video link 1
    if(vidLink.includes('youtube') == true){
        var vidCode = YTCode;
    }
    else if(vidLink.includes('youtu.be') == true){
        var vidCode = YTCodeB;
    }
    else if(vidLink.includes('kaltura') == true){
        var vidCode = KalturaCode;
    }
    else if(vidLink.includes('vimeo') == true){
        var vidCode = VimeoCode;        
    }
    else if(vidLink.includes('echo360') == true){
        var vidCode = EchoCode;
    }
    else if(vidLink.includes('ted.com') == true){
        var vidCode = TEDCode;
    }
    else if(vidLink == ''){
        var vidCode = vidPlaceholder;
    }

    //Find video source for  video link 2
    if(vidLink2.includes('youtube')== true){
        var vidCode2 = YTCode2;
    }
    else if(vidLink2.includes('youtu.be') == true){
        var vidCode = YTCodeB2;
    }
    else if(vidLink2.includes('kaltura') == true){
        var vidCode2 = KalturaCode2;
    }
    else if(vidLink2.includes('vimeo') == true){
        var vidCode2 = VimeoCode2;        
    }
    else if(vidLink2.includes('echo360') == true){
        var vidCode2 = EchoCode2;
    }
    else if(vidLink2.includes('ted.com') == true){
        var vidCode2 = TEDCode2;
    }
    else if(vidLink2 == ''){
        var vidCode2 = vidPlaceholder;
    }
    
    if ($('#vidTitleText').val() !== ''){
        var vidTitleText =  "<h4 class=\"text-bg-info p-2 bg-opacity-25 m-0 text-center\">" + $('#vidTitleText').val() + "</h4>";
    }
    else{
        var vidTitleText = '';
    }
    if ($('#vidTitleText2').val() !== ''){
        var vidTitleText2 =  "<h4 class=\"text-bg-info p-2 bg-opacity-25 m-0 text-center\">" + $('#vidTitleText2').val() + "</h4>";
    }
    else{
        var vidTitleText2 = '';
    }
  
    if(vidHeadSize !== "vid-noH"){
        //Resizing the heading text
        var vidSizes = {
            "vid-noH": "",
            "vid-h2": "<h2 class=\"text-bg-uq p-2\">" + vidHeadingText + "</h2>\n",
            "vid-h2-w": "<h2 class=\"text-bg-dark p-2\"><span class=\"fa-brands fa-youtube\"></span> Watch" + vidHeadingText + "</h2>\n",
            "vid-h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + vidHeadingText + "</h4>\n"
        }
        vidResizedHead = vidSizes[vidHeadSize];
    }
    else {
        vidResizedHead = "";
    }
    
    function vidOnly(){
        $('div#vidPosDiv, div#vidTextTiny, div#vidSmallTitle').removeClass('show');
        setTimeout(function(){
            $('div#vidPosDiv, div#vidTextTiny, div#vidSmallTitle').addClass('d-none');
        }, 200)
    }
    function notVidOnly(){
        $('div#vidPosDiv, div#vidTextTiny, div#vidSmallTitle').removeClass('d-none');
        setTimeout(function(){
            $('div#vidPosDiv, div#vidTextTiny, div#vidSmallTitle').addClass('show');
        }, 200)
    }
    function show2Vids(){
        $('#vid2').removeClass('d-none');
        setTimeout(function(){
            $('#vid2').addClass('show');
        }, 200)
    }
    function hide2Vids(){
        $('#vid2').removeClass('show');
        setTimeout(function(){
            $('#vid2').addClass('d-none');
        }, 200)        
    }
    //Changing code order depending on selections
    if(vidPosition == "left" && vidWidth=="50"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + colOpen + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyTextvid  + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "50"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + colOpen + tinyTextvid + divClose + colOpen + vidTitleText + respVidOpen + vidCode + divClose + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "left" && vidWidth == "33"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + col4Open + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyTextvid  + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);                
    }
    else if(vidPosition == "left" && vidWidth == "25"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + col3Open + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyTextvid  + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "33"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + colOpen + tinyTextvid + divClose + col4Open + vidTitleText + respVidOpen + vidCode + divClose + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "25"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + colOpen + tinyTextvid + divClose + col3Open + vidTitleText + respVidOpen + vidCode + divClose + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth =="50"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + colFloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyTextvid + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth == "33"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + col4FloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyTextvid + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth == "25"){
        notVidOnly();
        
        var vidFinalCode = sComm + vidResizedHead + rowOpen + col3FloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyTextvid + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidWidth == "0"){
        vidOnly();
        var vidFinalCode = sComm + vidResizedHead + vidTitleText + respVidOpen + vidCode + divClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidWidth == "2"){
        $('div#vidPosDiv, div#vidTextTiny').removeClass('show');
        setTimeout(function(){
            $('div#vidPosDiv, div#vidTextTiny').addClass('d-none');
        }, 200)
        show2Vids();
        var vidFinalCode = sComm + vidResizedHead + rowOpen + colOpen + vidTitleText + respVidOpen + vidCode + divClose + colOpen + vidTitleText2 + respVidOpen + vidCode2 + rowClose + eComm;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    if(vidWidth != "2"){
        hide2Vids();
    }
}
function generateBtnCode() {
    //Retrive values and text from the user's input
    var btnNumber = $('input[name="btnNumber"]:checked').val();
    var btnOneIcon = $('input[name="btnOneIcon"]:checked').val();
    var btnTwoIcon = $('input[name="btnTwoIcon"]:checked').val();
    var btnThreeIcon = $('input[name="btnThreeIcon"]:checked').val();
    var btnThreeText
    var sameOrNew = $('input[name="sameOrNew"]:checked').val();
    var btnWidth = $('input[name="btnWidth"]:checked').val();
    var btnColor = $('input[name="btnColour"]:checked').val();
    var btnTwoColor = $('input[name="btn2Colour"]:checked').val();
    var btnThreeColor = $('input[name="btn3Colour"]:checked').val();
    function hideBothDivs(){
        $('#btnTwoDiv, #btnThreeDiv').addClass('d-none');
    };
    function hideDivThree(){
        $('#btnThreeDiv').addClass('d-none');
    }
    function showBothDivs(){
        $('#btnTwoDiv, #btnThreeDiv').addClass('show');
    }
    function showDivTwo(){
        $('#btnTwoDiv').addClass('show');
    }
    function hideBtnWidth(){
        $('#btnWidthDiv').removeClass('show');
        setTimeout(function(){
            $('#btnWidthDiv').addClass('d-none'); 
        },200)
    }
    function showBtnWidth(){
        $('#btnWidthDiv').removeClass('d-none');
        setTimeout(function(){
            $('#btnWidthDiv').addClass('show'); 
        },200)
    }
    if(btnNumber == '1'){
        $('#btnTwoDiv, #btnThreeDiv').removeClass('show');
        setTimeout(hideBothDivs, 200);
        showBtnWidth()       
    }
    else if(btnNumber == '2'){
        $("#btnTwoDiv").removeClass("d-none");
        setTimeout(showDivTwo, 200);
        $("#btnThreeDiv").removeClass("show");
        setTimeout(hideDivThree, 200);
        hideBtnWidth();
    }
    else if(btnNumber == '3'){
        $("#btnTwoDiv, #btnThreeDiv").removeClass("d-none");
        setTimeout(showBothDivs, 200);
        hideBtnWidth();
    }
        var btnPosition = $('input[name="btnPosition"]:checked').val()
        var btnSize = $('input[name="btnSize"]:checked').val();
        if($('#btnOneText').val() !== ''){
            var btnOneText = $('#btnOneText').val();
        }
        else{
            var btnOneText = 'Placeholder button text';
        }
        if($('#btn2Text').val() !== ''){
            var btnTwoText = $('#btn2Text').val();
        }
        else{
            var btnTwoText = 'Placeholder button text';
        }
        if($('#btn3Text').val() !== ''){
            var btnThreeText = $('#btn3Text').val();
        }
        else{
            var btnThreeText = 'Placeholder button text';
        }
        
    if(btnOneIcon !=="noI"){
        //change out values for font-awesome classes
    var iconNames = {
        "noI": "",
        "1": " <span class=\"fa-solid fa-external-link-alt\"></span>",
        "2": " <span class=\"fa-solid fa-file-arrow-down\"></span>",
        "3": " <span class=\"fa-regular fa-hand-point-right\"></span>",
        "4": " <span class=\"fa-regular fa-circle-right\"></span>",
        "5": " <span class=\"fa-solid fa-arrow-right\"></span>"
    }
    btnOneFinalIcon = iconNames[btnOneIcon];
}
else{
    btnOneFinalIcon = "";
}
if(btnTwoIcon !=="noI2"){
    var icon2Names = {
        "noI2": "",
        "1": " <span class=\"fa-solid fa-external-link-alt\"></span>",
        "2": " <span class=\"fa-solid fa-file-arrow-down\"></span>",
        "3": " <span class=\"fa-regular fa-hand-point-right\"></span>",
        "4": " <span class=\"fa-regular fa-circle-right\"></span>",
        "5": " <span class=\"fa-solid fa-arrow-right\"></span>"
    }
    btnTwoFinalIcon = icon2Names[btnTwoIcon];
}
else{
    btnTwoFinalIcon = "";
}
if(btnThreeIcon !=="noI3"){
    var icon3Names = {
        "noI3": "",
        "1": " <span class=\"fa-solid fa-external-link-alt\"></span>",
        "2": " <span class=\"fa-solid fa-file-arrow-down\"></span>",
        "3": " <span class=\"fa-regular fa-hand-point-right\"></span>",
        "4": " <span class=\"fa-regular fa-circle-right\"></span>",
        "5": " <span class=\"fa-solid fa-arrow-right\"></span>"
    }
    btnThreeFinalIcon = icon3Names[btnThreeIcon];
}
else{
    btnThreeFinalIcon = "";
}
    
    if($('#btnLink').val() !== ''){
        btnLink = $('#btnLink').val();;
    }
    else(
        btnLink = btnPlaceholderLink
        )   
        if($('#btn2Link').val() !== ''){
            btnTwoLink = $('#btn2Link').val();;
        }
        else(
            btnTwoLink = btnPlaceholderLink
            ) 
            if($('#btn3Link').val() !== ''){
                btnThreeLink = $('#btn3Link').val();;
            }
            else(
                btnThreeLink = btnPlaceholderLink
                )  
    if ($('#btnTitleText').val() !== ''){
        var btnTitleText =  $('#btnTitleText').val();
    }
    else{
        var btnTitleText = btnOneText;
    }
    if ($('#btn2TitleText').val() !== ''){
        var btnTwoTitleText =  $('#btn2TitleText').val();
    }
    else{
        var btnTwoTitleText = btnTwoText;
    }
    if ($('#btn3TitleText').val() !== ''){
        var btnThreeTitleText =  $('#btn3TitleText').val();
    }
    else{
        var btnThreeTitleText = btnThreeText;
    }
    
    //Changing code order depending on selections
    if(btnPosition == "left" && btnWidth == "Nat"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "25"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w25 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "50"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w50 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "75"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w75 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "100"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w100 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">'+ btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "Nat"){
        var btnOneFinal = '<p class="text-center"><a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a></p>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "25"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + w25 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "50"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + w50 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "75"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + w75 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "100"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnOneFinal + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    if(btnNumber == '2'){
        var btnGroupOpen = '<div class="row">\n<div class="col-lg">\n'
        var btnColOpen = '<div class="col-lg">\n'
        var btnColClose = '</div>\n'
        var btnGroupClose = '</div>\n</div>\n'
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="'+ btnTitleText + '">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnTwoFinal = '<a href="' + btnTwoLink + '" class="btn btn-' + btnTwoColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="' + btnTwoTitleText + '">' + btnTwoText + btnTwoFinalIcon + '</a>\n';
        var btnFinalCode = sComm + btnGroupOpen + btnOneFinal + btnColClose + btnColOpen + btnTwoFinal + btnGroupClose + eComm;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    if(btnNumber == '3'){
            var btnGroupOpen = '<div class="row gap-2 p-2">\n<div class="col-lg">\n'
            var btnColOpen = '<div class="col-lg">\n'
            var btnColClose = '</div>\n'
            var btnGroupClose = '</div>\n</div>\n'
            var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="'+ btnTitleText + '">' + btnOneText + btnOneFinalIcon + '</a>\n';
            var btnTwoFinal = '<a href="' + btnTwoLink + '" class="btn btn-' + btnTwoColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="' + btnTwoTitleText + '">' + btnTwoText + btnTwoFinalIcon + '</a>\n';
            var btnThreeFinal = '<a href="' + btnThreeLink + '" class="btn btn-' + btnThreeColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="' + btnThreeTitleText + '">' + btnThreeText + btnThreeFinalIcon + '</a>\n';
            console.log(btnThreeText)
            var btnFinalCode = sComm + btnGroupOpen + btnOneFinal + btnColClose + btnColOpen + btnTwoFinal + btnColClose + btnColOpen + btnThreeFinal + btnGroupClose + eComm;
            $('#btnFinalCode').val(btnFinalCode);
            $('div#demo').html(btnFinalCode);
        }
    }
function generateAlertCode() {
    //Retrive values and text from the user's input
    var alertWidth = $('input[name="alertWidth"]:checked').val();
    var alertColor = $('input[name="alertColour"]:checked').val();
    $('#alertColourDiv div.alert').css('--bs-alert-margin-bottom', '0px');
    var alertOrQuote = $('input[name="alertOrQuote"]:checked').val();
    var fontSize = $('input[name="alertFontSize"]:checked').val();
    var alertHeadSize = $('input[name="alertHeadSize"]:checked').val();        
    var alertHeadIcon =  $('input[name="alertHeadIcon"]:checked').val();
    var citationPlaceholder = 'Citation in APA 7th';
    if(tinymce.get("tinyMCEalert").getContent() !==''){
        tinymce.get("tinyMCEalert").dom.addClass(tinyMCE.get("tinyMCEalert").dom.select('p:last-child'), 'mb-0');
        tinymce.get("tinyMCEalert").dom.addClass(tinyMCE.get("tinyMCEalert").dom.select('p:last-child'), 'mb-0');
        tinyTextalert = tinymce.get("tinyMCEalert").getContent() + '\n';
    }
    else{
        tinyTextalert = textPlaceholder;
    }
    if(tinymce.get("tinyMCEcitation").getContent() !==''){
        tinymce.get("tinyMCEcitation").dom.addClass(tinyMCE.get("tinyMCEcitation").dom.select('p:first-child'), 'd-inline')
        tinyTextCitation = tinymce.get("tinyMCEcitation").getContent() + '\n';
    }
    else{
        tinyTextCitation =  citationPlaceholder;
    }
    
    var alertHeadingText = $('#alertHeadingText').val()
    if($(alertHeadingText) !== ''){
        alertHeadingText = alertHeadingText
    }
    else{
        alertHeadingText = '';
    }
    $('#alertHeadingText').on('keyup', function() {
        // Check if the textarea contains text
        if ($(this).val().trim() !== '') {
          // Set the radio button with value 'h2' to checked
          $('input[type="radio"][value="alert-h4"]').prop('checked', true);
        }
         else {
          // Set the radio button with value 'noH' to checked
          $('input[type="radio"][value="alert-noH"]').prop('checked', true);
        }
      });
    if (alertHeadIcon !== "noI"){
        var icons = {
            "fa-circle-exclamation": "<i class=\"fa-solid fa-circle-exclamation\"></i> ",
            "fa-note-sticky": "<i class=\"fa-solid fa-note-sticky\"></i> ",
            "fa-circle-question": "<i class=\"fa-solid fa-circle-question\"></i> "
        }
        finalIcon = icons[alertHeadIcon];
    }
    else{
        finalIcon = "";
    }
    
    if(alertHeadSize !== "alert-noH"){
            //Resizing the heading text
            var alertSizes = {
                "alert-noH": "",
                "alert-h2": "<h2 class=\"alert-heading text-center\">" + finalIcon + alertHeadingText + "</h2>\n",
                "alert-h4": "<h4 class=\"alert-heading text-center\">" + finalIcon + alertHeadingText + "</h4>\n"
            }
            resizedAlertHead = alertSizes[alertHeadSize];
        }
        else {
            resizedAlertHead = "";
        }
        
        if(alertOrQuote == 'alert'){
            $('#citationDiv, #textSizeDiv').removeClass('show')
            setTimeout(function(){
                $('#citationDiv, #textSizeDiv').addClass('d-none')
            },200)
            $('#alertHeadingDiv, #alertHeadingIcon').removeClass('d-none');
            setTimeout(function(){$('#alertHeadingDiv, #alertHeadingIcon').addClass('show')
            }, 200)
            var alertFinalCode = sComm + alertOpen + alertColor + ' ' + 'border border-3 border-' + alertColor + ' ' + alertWidth + alertDivClose + resizedAlertHead + tinyTextalert + divClose + eComm;
            $('#alertFinalCode').val(alertFinalCode);
            $('div#demo').html(alertFinalCode);
        }
        else if(alertOrQuote == 'quote'){
            $('#citationDiv, #textSizeDiv').removeClass('d-none')
            setTimeout(function(){
                $('#citationDiv, #textSizeDiv').addClass('show')}, 200)
            $('#alertHeadingDiv, #alertHeadingIcon').removeClass('show');
            setTimeout(function(){
                $('#alertHeadingDiv, #alertHeadingIcon').addClass('d-none')}
                , 200)
            var alertFinalCode = sComm + alertOpen + alertColor + ' ' + 'border border-3 border-' + alertColor + ' ' + alertWidth + alertDivClose + quotationsLeft + figOpen + quoteWrapper + fontSize + closeWrapper + tinyTextalert + endQuoteWrapper + figCaptionOpen + tinyTextCitation + figCaptionClose + quotationsRight + '\n' + eComm;
            $('#alertFinalCode').val(alertFinalCode);
            $('div#demo').html(alertFinalCode);
        }
}
function generateTooltipCode(){
    setTimeout(function(){
        $('[data-bs-toggle="tooltip"]').tooltip();
    },200)
    var tooltipPosition = $('input[name="tooltipPosition"]:checked').val();
    var tooltipTerm = $('#tooltipTerm').val();
    var tooltipText = $('#tooltipText').val();
    if(tooltipText !== ''){
        tooltipText = tooltipText;
    }
    else{
        tooltipText = 'A tooltip is a brief explanation that appears on hover. Or you can use a tooltip to have the full title of an abbreviation.';
    }
    if(tooltipTerm !== ''){
        tooltipTerm = tooltipTerm
    }
    else{
        tooltipTerm = 'What is a tooltip?'
    }
    var tooltipFinalCode = '<span data-bs-toggle=\"tooltip\" data-bs-html="true" data-bs-placement=\"' + tooltipPosition + '\" data-bs-title=\"' + tooltipText + '\">'+ tooltipTerm +' <i class=\"fa fa-question-circle text-success\" aria-hidden=\"true\"></i></span\>';
    $('#tooltipFinalCode').val(tooltipFinalCode);
    $('div#demo').html(tooltipFinalCode);
}
function generateTableCode(){
    var tableHeadingText = $('#tableHeadingText').val();
    var tableHeadSize = $('input[name="tableHeadSize"]:checked').val();
    var theadColour = $('input[name="theadColour"]:checked').val();
    var tinyMCEtable = tinymce.get("tinyMCEtable").getContent();
    var tableStripes = $('input[name="tableStripe"]:checked').val();
    var tablePlaceholder = '<table class=\"table table-responsive table-hover table-bordered\">\n<thead>\n<tr>\n<th></th>\n<th>Table heading 1</th>\n<th>Table heading 2</th>\n<th>Table heading 3</th>\n<th>Table heading 4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Row 1</td>\n<td>Row 1</td>\n<td>Row 1</td>\n<td>Row 1</td>\n<td>Row 1</td>\n</tr>\n<tr>\n<td>Row 2</td>\n<td>Row 2</td>\n<td>Row 2</td>\n<td>Row 2</td>\n<td>Row 2</td>\n</tr>\n<tr>\n<td>Row 3</td>\n<td>Row 3</td>\n<td>Row 3</td>\n<td>Row 3</td>\n<td>Row 3</td>\n</tr>\n<tr>\n<td>Row 4</td>\n<td>Row 4</td>\n<td>Row 4</td>\n<td>Row 4</td>\n<td>Row 4</td>\n</tr>\n</tbody>\n</table>\n';
    $('#tableHeadingText').on('keyup', function() {
        // Check if the textarea contains text
        if ($(this).val().trim() !== '') {
          // Set the radio button with value 'h2' to checked
          $('input[type="radio"][value="table-h4"]').prop('checked', true);
        }
         else {
          // Set the radio button with value 'noH' to checked
          $('input[type="radio"][value="table-noH"]').prop('checked', true);
        }
      });
    if(tinymce.get("tinyMCEtable").getContent() != ''){
        var tinyMCEtable = tinyMCEtable;
        var thCalc = $(tinyMCEtable).find('tbody td').length/$(tinyMCEtable).find('tbody tr').length;
    }
    else{
    }
    if(theadColour != 'noF'){
        var theadColourOptions = {
            "bold" : "thead",
            "primary" : "table-primary",
            "secondary" : "table-secondary",
            "info" : "table-info",
            "danger" : "table-danger",
            "warning" : "table-warning",
            "success" : "table-success",
            "dark" : "table-dark",
            "light" : "table-light",
            "uq" : "bg-uq text-white"
        }
        boldHeader()
        theadRecoloured = theadColourOptions[theadColour];
        tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('thead'));
        tinymce.get("tinyMCEtable").dom.addClass(tinyMCE.get("tinyMCEtable").dom.select('thead'), theadRecoloured);       
    }
    else{
        normalHeader()
    }
    if(tableStripes == "table-striped"){
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped-columns');       
        tinymce.get("tinyMCEtable").dom.addClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped');       
    }
    else if(tableStripes == "table-striped-columns"){
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped');       
        tinymce.get("tinyMCEtable").dom.addClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped-columns'); 
    }
    else if(tableStripes == ""){
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped');
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped-columns');
    }  
   
    if(tableHeadSize !== "table-noH"){
        //Resizing the heading text
        var tableSizes = {
            "table-noH": "",
            "table-h2": "<h2 class=\"text-bg-uq p-2\">" + tableHeadingText + "</h2>\n",
            "table-h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + tableHeadingText + "</h4>\n"
        }
        tableResizedHead = tableSizes[tableHeadSize];
    }
    else {
        tableResizedHead = "";
    }
    var tinyMCEtable = tinymce.get("tinyMCEtable").getContent();
    var tableFinalCode = sComm + tableResizedHead + tinyMCEtable + '\n' + eComm;
    $('#tableFinalCode').val(tableFinalCode);
    $('div#demo').html(tableFinalCode);
}   
function cleanTable() {
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('table'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('thead'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('tbody'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('tr'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('th'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('td'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('div'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('p'));
    tinymce.get("tinyMCEtable").setContent(tinyMCEtable.replace('<table>','<table class="table table-responsive table-hover table-bordered">'));
    tinymce.get("tinyMCEtable").dom.remove(tinyMCE.get("tinyMCEtable").dom.select('colgroup'));
    tinymce.get("tinyMCEtable").dom.remove(tinyMCE.get("tinyMCEtable").dom.select('div'));
    tinymce.get("tinyMCEtable").dom.remove(tinyMCE.get("tinyMCEtable").dom.select('p'));
    generateTableCode();
}
function makeTable(){
    var tableOpen = '<table class="table table-responsive table-bordered table-hover">';
    //\n<thead>\n<tr>\n || </tr>\n</thead>\n
    var tableClose = '</tbody>\n</table>\n';
    var tBodyOpen = '<tbody>\n';
    var trOpen = '<tr>';
    var trClose = '</tr>\n';     
    var thSingle = '<th></th>\n';
    var tdSingle = '<td></td>\n';
    var rowNumber = $('input#rowNumber').val();
    var colNumber = $('input#colNumber').val();
    var rowSingle = trOpen + tdSingle.repeat(colNumber) + trClose
    tinymce.get("tinyMCEtable").setContent(tableOpen + thSingle.repeat(colNumber) + tBodyOpen + rowSingle.repeat(rowNumber) + tableClose);
    generateTableCode();
  }
  function addRowAfter(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertRowAfter', false);
    generateTableCode();
  }
  function addRowBefore(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertRowBefore', false);
    generateTableCode();
  }
  function addColAfter(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertColAfter', false);
    generateTableCode();
  }
  function addColBefore(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertColBefore', false);
    generateTableCode();
  }
  function removeCol(){
    tinymce.get("tinyMCEtable").execCommand('mceTableDeleteCol', false);
    generateTableCode();
  }
   function removeRow(){
    tinymce.get("tinyMCEtable").execCommand('mceTableDeleteRow', false);
    generateTableCode();
  }
  function removeTable(){
    tinymce.get("tinyMCEtable").execCommand('mceTableDelete', false);
    generateTableCode();
  }
  function boldHeader(){
    tinymce.activeEditor.getBody();
    tinymce.get("tinyMCEtable").selection.setCursorLocation();
    tinymce.get("tinyMCEtable").execCommand('mceTableRowType', false, { type: 'header' });
    tinymce.activeEditor.focus();
  }
  function normalHeader(){
    tinymce.activeEditor.getBody();
    tinymce.get("tinyMCEtable").selection.setCursorLocation();
    tinymce.get("tinyMCEtable").execCommand('mceTableRowType', false, { type: 'body' });
    tinymce.activeEditor.focus();
  }
  function generateAccCode(){
    var accName = $('#accName').val();
    var accHeadingText = $('#accHeadingText').val();
    var accHeadSize = $('input[name="accHeadSize"]:checked').val();
    var showHideFirst = $('input[name="accFirstOpen"]:checked').val();
    var drawerQuantity = $('#drawerNumber').val();
    var drawerTitles = [];
    for (let i = 1; i <= 10; i++) {
        drawerTitles[i] = $(`#acc${i}Btn`).val();
    }
    var contentBodies = [];
    for (let i = 1; i <= 10; i++) {
        contentBodies[i] = tinymce.get(`acc${i}Content`).getContent();
    }
    function createAccDrawer(drawerNumber, drawerTitle, isCollapsed = true) {
        const expanded = isCollapsed ? 'false' : 'true';
        const collapsed = isCollapsed ? 'collapsed' : '';
        return `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${drawerNumber}">
                <button class="accordion-button ${collapsed}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${drawerNumber}" aria-expanded="${expanded}" aria-controls="collapse${drawerNumber}">
                    ${drawerTitle}
                </button>
            </h2>`;
    }
    
    function createContentOpen(drawerNumber, contentBody, showHideFirst = '', accName) {
        const showHide = showHideFirst === 'true' && drawerNumber === 1 ? ' show' : '';
        return `<div id="collapse${drawerNumber}" class="accordion-collapse collapse${showHide}" aria-labelledby="heading${drawerNumber}" data-bs-parent="#accordion${accName}">
            <div class="accordion-body">${contentBody}</div>
        </div>`;
    }
   
    accCode += accClose;
    var accOpen = `<div class="accordion" id="accordion${accName}">\n`;
    var accClose = '</div>';
    var drawerClose = '</div>\n';
    
    var accDrawers = [];
    var contentOpens = [];
    for (let i = 1; i <= 10; i++) {
        accDrawers[i] = createAccDrawer(i, drawerTitles[i], i !== 1);
        contentOpens[i] = createContentOpen(i, contentBodies[i], i === 1 ? ' show' : '', accName);
    }
    $('#accHeadingText').on('keyup', function() {
        const value = $(this).val().trim() !== '' ? 'acc-h2' : 'acc-noH';
        $('input[type="radio"][value="' + value + '"]').prop('checked', true);
    });
     // Generate placeholders for accordion drawers 1, 2, and 3
     for (let i = 1; i <= 3; i++) {
        accDrawers[i] = createAccDrawer(i, drawerTitles[i], showHideFirst === 'true' && i === 1);
        contentOpens[i] = createContentOpen(i, contentBodies[i], showHideFirst === 'true' && i === 1, accName);
    }
    
    // Generate the full accordion code
    var accCode = accOpen;
    for (let i = 1; i <= 3; i++) {
        accCode += accDrawers[i] + contentOpens[i] + drawerClose;
    }
    var accHeadSizes = {
        "acc-noH": "",
        "acc-h2": "<h2 class=\"text-bg-uq p-2\">" + accHeadingText + "</h2>\n",
        "acc-h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + accHeadingText + "</h4>\n"
    }
    
    var accResizedHead = accHeadSizes[accHeadSize] || "";
    
    var drawers = [accDrawers[4], accDrawers[5], accDrawers[6], accDrawers[7], accDrawers[8], accDrawers[9], accDrawers[10]];
    var contents = [contentOpens[4], contentOpens[5], contentOpens[6], contentOpens[7], contentOpens[8], contentOpens[9], contentOpens[10]];

    var accCode = accOpen + accDrawers[1] + contentOpens[1] + drawerClose + accDrawers[2] + contentOpens[2] + drawerClose + accDrawers[3] + contentOpens[3] + drawerClose;

    for (let i = 0; i < drawerQuantity - 3; i++) {
        accCode += drawers[i] + contents[i] + drawerClose;
    }
    
    $("#drawerNumber").change(minMax);
    
    function minMax() {
        var max = parseInt($("#drawerNumber").attr('max'));
        var min = parseInt($("#drawerNumber").attr('min'));
        var value = $("#drawerNumber").val();
        if (value > max) {
            Swal.fire({
                icon: 'error',
                title: '<div class="text-center">Maximum 10 Drawers</div>',
                text: 'The maximum number of drawers you can have is 10.'
            });
            $("#drawerNumber").val(max);
            generateAccCode();
        } else if (value < min) {
            Swal.fire({
                icon: 'error',
                title: '<div class="text-center">Minimum 3 Drawers</div>',
                text: 'The minimum number of drawers you can have is 3.'
            });
            $("#drawerNumber").val(min);
            generateAccCode();
        }
    }
    
    var accFinalCode = sComm + accResizedHead + accCode + '\n' + eComm;
    $('#accFinalCode').val(accFinalCode);
    $('div#demo').html(accFinalCode);
    
    $('h2.accordion-header').on('click', function() {
        $('div.accordion-collapse').removeClass('show');
        console.log('function run');
    });
} 
function generateReadmoreCode(){
    var readmorePreBtnPlaceholder = '<p>This is where the pre button text will appear.</p>\n';
    var readmorePostBtnPlaceholder = '<p>This is where the post button text will appear.</p>\n';
    var readmoreHeadingText = $('#readmoreHeadingText').val();
    var readmoreHeadSize = $('input[name="readmoreHeadSize"]:checked').val();
    var readmoreName = $('#readmoreName').val();
    var tinyReadmorePreBtn = tinymce.get("tinyMCEreadmorePreBtn").getContent();
    var readmoreBtnOpen = '<p class=\"mt-2\"><a class=\"btn btn-uq d-block mx-auto w-75 readmoreToggle\" data-bs-toggle=\"collapse\" href=\"#' + readmoreName + '\" role="button" aria-expanded="false" aria-controls=\"' + readmoreName + '\">Read more <i class=\"fa-solid fa-angle-down\"></i></a></p>\n';
    var textAfterOpen = '<div class="collapse mt-2" id=\"' + readmoreName + '">\n';
    var tinyReadmorePostBtn = tinymce.get("tinyMCEreadmorePostBtn").getContent();
    var textAfterClose = '</div>\n';
    var iconToggleScript = "<script type=\"text/javascript\">\n$('a[href=\"#" + readmoreName + "\"]').click(function(){\n$('i', this).toggleClass('fa-angle-down fa-angle-up');});\n</script>\n"
    $('a[href="https://google.com"]');
    $('#readmoreHeadingText').on('keyup', function() {
        // Check if the textarea contains text
        if ($(this).val().trim() !== '') {
          // Set the radio button with value 'h2' to checked
          $('input[type="radio"][value="readmore-h4"]').prop('checked', true);
        }
         else {
          // Set the radio button with value 'noH' to checked
          $('input[type="radio"][value="readmore-noH"]').prop('checked', true);
        }
      });
    if(tinymce.get("tinyMCEreadmorePreBtn").getContent() != ""){
        var tinyReadmorePreBtn = tinymce.get("tinyMCEreadmorePreBtn").getContent();
    }
    else{
        var tinyReadmorePreBtn = readmorePreBtnPlaceholder
    }
    if(tinymce.get("tinyMCEreadmorePostBtn").getContent() != ""){
        var tinyReadmorePostBtn = tinymce.get("tinyMCEreadmorePostBtn").getContent();
    }
    else{
        var tinyReadmorePostBtn = readmorePostBtnPlaceholder
    }
    
    if(readmoreHeadSize !== "readmore-noH"){
        //Resizing the heading text
        var readmoreHeadSizes = {
            "readmore-noH": "",
            "readmore-h2": "<h2 class=\"text-bg-uq p-2\">" + readmoreHeadingText + "</h2>\n",
            "readmore-h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + readmoreHeadingText + "</h4>\n"
        }
        readmoreResizedHead = readmoreHeadSizes[readmoreHeadSize];
    }
    else {
        readmoreResizedHead = "";
    }
    var finalReadmoreCode = readmoreResizedHead + tinyReadmorePreBtn + textAfterOpen + tinyReadmorePostBtn + textAfterClose + readmoreBtnOpen + iconToggleScript;
    $('#readmoreFinalCode').val(finalReadmoreCode);
    $('div#demo').html(finalReadmoreCode);
}
function copyCode() {
    var activeBtn = $('button.active').attr('id');
    var btnToCodeMap = {
        'imgBuilderBtn': '#imgFinalCode',
        'vidBuilderBtn': '#vidFinalCode',
        'btnBuilderBtn': '#btnFinalCode',
        'alertBuilderBtn': '#alertFinalCode',
        'tooltipBuilderBtn': '#tooltipFinalCode',
        'tableBuilderBtn': '#tableFinalCode',
        'accBuilderBtn': '#accFinalCode',
        'readmoreBuilderBtn': '#readmoreFinalCode'
    };

    if (activeBtn === 'tableBuilderBtn') {
        generateTableCode();
    }

    var selectedCode = $(btnToCodeMap[activeBtn]).select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
        console.log("@GB: snippet = ", selectedCode.val());
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    Swal.fire({
        title: '<span class="fs-5 d-block mx-auto text-center">Code copied</span>',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000 // Duration in milliseconds
    });
}