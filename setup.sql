CREATE DATABASE IF NOT EXISTS ooh_media;
USE ooh_media;
CREATE TABLE IF NOT EXISTS `shopping_centres` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
CREATE TABLE IF NOT EXISTS `assets` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dimension` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `shopping_centre_id` int(5) NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`shopping_centre_id`) REFERENCES shopping_centres(`id`) ON DELETE SET NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
