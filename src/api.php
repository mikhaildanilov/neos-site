<?php
    $message = '';

    foreach($_POST as $val) {
        $message .= $val . '\r\n';
    }

    // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
    $message = wordwrap($message, 70, '\r\n');

    $headers =  'MIME-Version: 1.0' . '\r\n'; 
    $headers .= 'From: Your name <info@address.com>' . '\r\n';
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . '\r\n'; 

    mail('to@mail.ru', 'Оставлена заявка', $message, $headers);
?>
