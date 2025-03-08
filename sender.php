<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "kate.pidoni@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Фамилия: $surname /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<div class="overlay overlay__modal overlay__modal_thanks " id="thanks">
    <div class="overlay__close"> &times; </div>
    <div class="overlay__header">Спасибо за вашу заявку!</div>
    <div class="overlay__subheader">Наш менеджер свяжется с вами в ближайшее время!</div>
</div>