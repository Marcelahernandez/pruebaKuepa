-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 31-05-2020 a las 18:33:30
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kuepa_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `date` date NOT NULL,
  `rol_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `chats`
--

INSERT INTO `chats` (`id`, `user_id`, `message`, `date`, `rol_user`) VALUES
(1, 2, 'texto', '2020-05-31', 2),
(2, 2, 'texto de marcela', '2020-05-31', 2),
(3, 3, 'Bienvenidos a clase', '2020-05-31', 1),
(4, 2, 'hola soy estudiante', '2020-05-31', 2),
(5, 2, 'text', '2020-05-31', 2),
(6, 2, 'texto', '2020-05-31', 2),
(7, 2, 'buenas', '2020-05-31', 2),
(8, 2, 'buenas tardes profesor', '2020-05-31', 2),
(9, 2, 'buenas', '2020-05-31', 2),
(10, 3, 'buenos dias estudiantes', '2020-05-31', 1),
(11, 2, 'Hola profesor buenos dias', '2020-05-31', 2),
(12, 2, 'buenos dias a todos', '2020-05-31', 2),
(13, 2, 'hola', '2020-05-31', 2),
(14, 2, 'texto bla', '2020-05-31', 2),
(15, 2, 'texto', '2020-05-31', 2),
(16, 2, 'prueba', '2020-05-31', 2),
(17, 2, 'mi vida es bella', '2020-05-31', 2),
(18, 2, 'buenas', '2020-05-31', 2),
(19, 2, 'buenos dias estrellitas', '2020-05-31', 2),
(20, 2, 'hola', '2020-05-31', 2),
(21, 2, 'bla', '2020-05-31', 2),
(22, 2, 'buenas', '2020-05-31', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `name`) VALUES
(1, 'Moderador'),
(2, 'Estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `created` text DEFAULT NULL,
  `user_rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user_name`, `email`, `user_password`, `created`, `user_rol`) VALUES
(2, 'Marcela', 'yuliher11@hotmail.com', '$2b$10$DCnwqjrMQI4jrXKr/odSQ.VcZPNRNtHM41ZXswxkgwpjNC2LrFI/W', '2020-05-30 05:26:37', 2),
(3, 'Carlos Bernal', 'yuliher5421@gmail.com', '$2b$10$VtVr0500h6JYUhutuJojleOHhglh7InUlBIQ2rhWzx.qy5vx4Gahe', '2020-05-31 06:56:34', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
