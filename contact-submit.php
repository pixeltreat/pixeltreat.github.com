<?php
$contact = $_POST;
$name = $contact['contact-name'];
$from = $contact['contact-email'];
$company = $contact['contact-company'];
$telephone = $contact['contact-telephone'];
$url = $contact['contact-url'];
$country = $contact['contact-country'];
$message = $contact['contact-enquiry'];
$headers = 'From: ' . $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$to = "prasad@pixeltreat.com";
$message .= "\r\n".$name."\r\n".$company."\r\n".$url."\r\n".$telephone."\r\n".$country;
$subject = "Message from " . $name . " - " . $company . " - " . $country;
$sentmail = mail($to,$subject,$message,$headers);
if($sentmail){
	$status = true;
}
else {
	$status = false;
}
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Thanks for your interest in me. will get back to you very soon</title>
<meta http-equiv="expires" content="0">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
<link href="css/layout.css" type="text/css" rel="stylesheet">
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lt IE 7]><script src="js/ie_png.js"></script><![endif]-->
<script type="text/javascript" src="js/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="js/cufon.js"></script>
</head>
<body>
<div id="pagewrap" class="contact-page"> 
  <!-- page header and navigations comes here -->
  <header>
    <h1 class="pt-logo-small"><a href="index.shtml"><img src="images/pt-logo-small.gif" alt="Pixel Treat Logo">Pixel Treat Logo</a></h1>
    <nav class="main-nav">
      <ul>
        <li><a href="index.shtml" class="home"><span>Home</span></a></li>
        <li><a href="portfolio.shtml" class="portfolio"><span>Portfolio</span></a></li>
        <li><a href="http://pixeltreat.blogspot.in" class="blog"><span>Blog</span></a></li>
        <li><a href="about.shtml" class="about"><span>About</span></a></li>
        <li class="lastright"><a href="contact.php" class="con-active"><span>Contact</span></a></li>
      </ul>
      <div class="clear"></div>
    </nav>
  </header>
  <!-- main page elements comes here -->
  <section> 
    <!-- about, what i do, Get in touch section -->
    <ul class="tab-headings" id="cufon-font">
      <li>Get in <span>touch</span></li>
    </ul>
    <div class="contact-me">
      <div class="form-elements">
        <?php if($status) { ?>
		<div id="mail_sucess">
          <img src="images/mailSent.png" alt="Mail Sent Successfully" />
          <div class="text-rgt">
			<div class="msgHead">Your request submitted Successfully.</div>
            <p class="txt-small">I will Getback to You Soon....</p>
		  </div>
          <div class="clear"></div>	
		</div>
		<?php }else { ?>
		<div id="mail_failed">
		    <div class="msgHead">Oops! Something Bad Happened!</div>
            <p class="txt-small">Please mail me at <a href="mailto:prasad@pixeltreat.com">prasad@pixeltreat.com</a>. Thank you!</p>			
            <div class="clear"></div>
         </div>
        <?php } ?>        		
       </div>
      <div class="right-widgets-block">
        <!-- follow me widget -->
        <div class="two-col socials-tab">
          <h2 class="widget-brdr">Follow <span>me</span></h2>
          <div class="col"> <a class="gtalk-icon" href="mailto:thepixeltreat@gmail.com">Gtalk</a> <a class="yahoo-icon" href="mailto:pixeltreat@yahoo.com">Yahoo!</a> <a class="email-icon" href="mailto:prasad@pixeltreat.com">Email</a> </div>
          <div class="col"> <a class="linked-icon" href="http://www.linkedin.com/in/mrprasad" target="_blank">Linked in</a> <a class="fb-icon" href="http://www.facebook.com/dsadhanala" target="_blank">Face book</a> <a class="twit-icon" href="http://twitter.com/mrUIdesigner" target="_blank">Twitter</a> </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>      
    </div>
  </section>
  <!-- page footer comes here -->
  <footer>
    <div class="ftr">
      <div class="copyright">&copy; 2011 pixeltreat.com - all rights reserved</div>
      <!--<div class="mobile-link"><a href="#">Visit Mobile Web Site</a></div> -->
      <nav class="ftr-nav">
        <ul>
          <li><a href="index.shtml">Home</a></li>
          <li><a href="portfolio.shtml">Portfolio</a></li>
          <li><a href="http://pixeltreat.blogspot.in">Blog</a></li>
          <li><a href="about.shtml">About</a></li>
          <li class="lastright"><a href="contact.php">Contact</a></li>
        </ul>
        <div class="clear"></div>
      </nav>
    </div>
  </footer>
</div>
<!-- IE6 msg -->
<div id="ie6msg">
  <p>Our website has detected that you are using an outdated browser. Using your current browser will prevent you from accessing features on our website. <br>
    An upgrade is not required, but is strongly recommend to improve your browsing experience on our website.</p>
</div>
<!-- page content end here jcript files embed starts --> 
<!--<script type="text/javascript">QueryLoader.selectorPreload = "body"; QueryLoader.init(); </script> -->
<script type="text/javascript">
	Cufon.replace('#cufon-font li'); // Works without a selector engine
	Cufon.now();	
</script>
<script type="text/javascript" src="js/generalScripts.js"></script>
</body>
</html>
