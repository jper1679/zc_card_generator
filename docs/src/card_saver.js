/**
 * Mise à jour du modèle mémoire en fonction des manipulations
 */

function display_unsaved_data_alert(){
	there_is_unsaved_change();
}
 
function save_griffe_image(){
	var griffe_image = $("#output_griffe");
	current_card.griffe_image = griffe_image.attr("src");
	display_unsaved_data_alert();
}

function delete_griffe_image(){
	current_card.griffe_image = "";
	display_unsaved_data_alert();
	delete current_card.griffe_image_top;
	delete current_card.griffe_image_left;
	output_griffe();
}

function save_card_image(){
	var card_image = $("#card_image");
	current_card.card_image = card_image.attr("src");
	current_card.card_image_top = card_image.position().top;
	current_card.card_image_left = card_image.position().left;
	display_unsaved_data_alert();
}

function save_stats() {
    current_card.range = replace_carriage_return($("#input_range").val());
    current_card.nb_dices = replace_carriage_return($("#input_nb_dice").val());
    current_card.val_dices = replace_carriage_return($("#input_val_dice").val());
    current_card.power = replace_carriage_return($("#input_power").val());
	
    if (!is_stats() && current_card.griffe_image_top) {
        delete current_card.griffe_image_top;
        delete current_card.griffe_image_left;
    }
	
    display_unsaved_data_alert();
    output_stats();
}

function save_headers() {
    set_locale_string("card_name",$("#input_card_name").val());
	
    display_unsaved_data_alert();
	
    output_headers();
}

function save_card_level(){
	current_card.ultrayellow=$("#input_ultrayellow").is(":checked");
        current_card.ultraorange=$("#input_ultraorange").is(":checked");
        current_card.ultrarouge=$("#input_ultrarouge").is(":checked");
	display_unsaved_data_alert();
	
	output_card_level();
}

function save_slot(){
	current_card.slot_armor = $("#input_slot_armor").is(":checked");
	current_card.slot_hand = $("#input_slot_hand").is(":checked");
        current_card.slot_bag = $("#input_slot_bag").is(":checked");
	
	// réinisitlisation de la position de l'image quand on la masque
	if(!current_card.slot_armor && !current_card.slot_hand && !current_card.slot_bag){
		$("#calque_slot").removeAttr("style");
		current_card.slot_top = $("#calque_slot").css("top");
	}
	display_unsaved_data_alert();
	
	output_slot();
}

function save_break_in_noise(){
	current_card.noisy_break_in = $("#input_break_in_noisy").is(":checked");
	current_card.silent_break_in = $("#input_break_in_silent").is(":checked");
        current_card.noisy_dices = $("input_dices").value;
	
	// réinisitlisation de la position de l'image quand on la masque
	if(!current_card.silent_break_in && !current_card.noisy_break_in){
		$("#calque_break_in_noise").removeAttr("style");
		current_card.break_in_noise_top = $("#calque_break_in_noise").css("top");
	}
	display_unsaved_data_alert();
	
	output_break_in_noise();
}

function end_drag_break_in_noise(){
	current_card.break_in_noise_top = $("#calque_break_in_noise").position().top;
	display_unsaved_data_alert();
}

function end_drag_kill_noise(){
	current_card.kill_noise_top = $("#calque_kill_noise").position().top;
	display_unsaved_data_alert();
}

function save_griffe_position(){
	current_card.griffe_image_top = $("#output_griffe").position().top;
	current_card.griffe_image_left = $("#output_griffe").position().left;
	if(current_card.griffe_image_left < 0){
		current_card.griffe_image_left=0;
	}
	output_griffe();
}

function end_drag_griffe(){
	save_griffe_position();
	display_unsaved_data_alert();
}

function end_drag_description(){
	update_descripion_text_position();
	current_card.description_top = $("#calque_description").position().top;
	
	save_griffe_position();
	
	display_unsaved_data_alert();
}

function save_kill_noise(){
	current_card.noisy_kill=$("#input_kill_noisy").is(":checked");
	current_card.silent_kill=$("#input_kill_silent").is(":checked");
	
	// réinitialisation de la position de l'icone quand on la masque
	if(!current_card.noisy_kill && !current_card.silent_kill){
		$("#calque_kill_noise").removeAttr("style");
		current_card.kill_noise_top = $("#calque_kill_noise").css("top");
	}
	display_unsaved_data_alert();
	
	output_kill_noise();
}

function save_card_type(){
	current_card.card_type = $('input[name=input_card_type]:checked').val();
	change_bleeding_areas();
}

function save_dual(){
	current_card.dual=$("#input_dual").is(":checked");
	display_unsaved_data_alert();
	
	output_dual();
}

function save_description(){
    var description = $("#input_description").val();
    set_locale_string("description",description);
    
    var card_sub_name = $("#input_card_sub_name").val();
    set_locale_string("card_sub_name",card_sub_name);
    
    var card_sub_name_size = $("#input_card_sub_name_size").val();
    set_locale_string("card_sub_name_size",card_sub_name_size);
    
    var card_description_size = $("#input_card_description_size").val();
    set_locale_string("card_description_size",card_description_size);
    
    display_unsaved_data_alert();

    // réinitialisation de la position du cadre
    if(!description){
        current_card.description_top = $("#calque_description").css("top");
        delete current_card.griffe_image_top;
        delete current_card.griffe_image_left;
    }
    
    output_parchemin();
    output_description();
    
}

function save_position_parchemin(){
    var position_parchemin = $("#input_position_parchemin").val();
    set_locale_string("position_parchemin",position_parchemin);
    
    display_unsaved_data_alert();

    output_parchemin();
    output_description();
}

function start_drag_description(){
	start_top_description = $("#calque_description").offset().top;
	start_top_griffe=$("#output_griffe").offset().top;
}

function save_image_max_range(){
	current_card.image_max_range = $("#input_image_max_rate").val();
	output_image_max_range();
	center_card_image();
	move_shadow();
	display_unsaved_data_alert();
}

function save_card_image_shadow(){
	current_card.card_image_shadow = $("#input_image_shadow").is(":checked");
	display_unsaved_data_alert();
	
	output_card_image_shadow();
}

function end_drag_card_image(){
	move_shadow();
	save_card_image();
}

$(document).ready(function() {
    $("#card_file").change(handle_change_card_image);
    $("#griffe_file").change(handle_change_griffe_image);
    
    $(".input_card_stats").keyup(save_stats);
    $("#input_card_name").keyup(save_headers);
    
    $("#input_card_sub_name").keyup(save_description);
    $("#input_description").keyup(save_description);
    
    $("#input_position_parchemin").keyup(save_position_parchemin);
    $("#input_position_parchemin").change(save_position_parchemin);
    
    $("#input_card_sub_name_size").change(save_description);
    $("#input_card_description_size").change(save_description);
    
    
    $("input[name='input_card_level']").click(save_card_level);
    
    $("#input_dual").click(save_dual);
    $("input[name='input_slot']").click(save_slot);
    
    $("input[name='input_card_type']").click(save_card_type);
    
    $("input[name='input_break_in_noise']").click(save_break_in_noise);
    $("input[name='input_kill_noise']").click(save_kill_noise);
    
    $(".calque_break_in_noise").draggable({
        containment: "#card_overlay",
        axis: "y",
        cursor: "move",
		stop: end_drag_break_in_noise
    });
    
//    $("#calque_description").draggable({
//        axis: "y",
//        cursor: "move",
//		drag: update_descripion_text_position,
//		stop: end_drag_description,
//		start: start_drag_description
//    });
	
//    $("#output_griffe").draggable({
//        cursor: "move",
//		stop: end_drag_griffe
//    });
	
//    $(".calque_kill_noise").draggable({
//        containment: "#card_overlay",
//        axis: "y",
//        cursor: "move",
//		stop: end_drag_kill_noise
//    });

    $("#card_image").draggable({
	containment: "#card_overlay",
	cursor: "move",
            drag: move_shadow,
            stop: end_drag_card_image
    });
	
    $("#load_card_file").click(function(){
        $("#input_zec_file").click();
    });
	
    $("#load_card_image").click(function(){
        $("#card_file").click();
    });
	
    $("#load_griffe_image").click(function(){
        $("#griffe_file").click();
    });
	
    $("#delete_griffe_image").click(delete_griffe_image);
	
    $("#input_image_max_rate").keyup(save_image_max_range);
	
    $("#input_image_shadow").click(save_card_image_shadow);
})